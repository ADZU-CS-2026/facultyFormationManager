import { POST } from './route';
import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';

// Mock the database pool
jest.mock('@/lib/db', () => ({
    pool: {
        execute: jest.fn(),
    },
}));

// Mock NextResponse
jest.mock('next/server');

describe('POST /api/user/fetchuser', () => {
    let mockRequest;
    let mockJsonResponse;

    beforeEach(() => {
        // Clear all mocks
        jest.clearAllMocks();

        // Setup mock response helper
        mockJsonResponse = (data, init = {}) => {
            const response = {
                status: init.status || 200,
                data,
            };
            response.json = jest.fn().mockResolvedValue(data);
            return response;
        };

        // Mock NextResponse.json
        NextResponse.json = jest.fn((data, init) => mockJsonResponse(data, init));

        // Create a mock request object
        mockRequest = {
            json: jest.fn(),
        };
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('Successful requests', () => {
        it('should return users when all required fields are provided', async () => {
            // Arrange
            const requestBody = {
                department: 'CS',
                school_year: '2024-2025',
                work_status: 'Active',
            };

            const mockDbResponse = [
                {
                    id: 1,
                    full_name: 'John Doe',
                    department: 'CS',
                    work_status: 'Active',
                    school_year: '2024-2025',
                },
                {
                    id: 2,
                    full_name: 'Jane Smith',
                    department: 'CS',
                    work_status: 'Active',
                    school_year: '2024-2025',
                },
            ];

            mockRequest.json.mockResolvedValue(requestBody);
            pool.execute.mockResolvedValue([mockDbResponse]);

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(mockRequest.json).toHaveBeenCalledTimes(1);
            expect(pool.execute).toHaveBeenCalledWith(
                expect.stringContaining('SELECT'),
                ['Active', 'CS', '2024-2025']
            );
            expect(NextResponse.json).toHaveBeenCalledWith({
                success: true,
                count: 2,
                data: mockDbResponse,
            });
            expect(response.status).toBe(200);
        });

        it('should return empty array when no users match criteria', async () => {
            // Arrange
            const requestBody = {
                department: 'Admin',
                school_year: '2023-2024',
                work_status: 'Retired',
            };

            mockRequest.json.mockResolvedValue(requestBody);
            pool.execute.mockResolvedValue([[]]);

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(NextResponse.json).toHaveBeenCalledWith({
                success: true,
                count: 0,
                data: [],
            });
            expect(response.status).toBe(200);
        });

        it('should query database with correct SQL and parameters', async () => {
            // Arrange
            const requestBody = {
                department: 'FFP',
                school_year: '2025-2026',
                work_status: 'On Leave',
            };

            mockRequest.json.mockResolvedValue(requestBody);
            pool.execute.mockResolvedValue([[]]);

            // Act
            await POST(mockRequest);

            // Assert
            const [query, params] = pool.execute.mock.calls[0];
            expect(query).toContain('SELECT');
            expect(query).toContain('FROM users');
            expect(query).toContain('INNER JOIN retreat_records');
            expect(query).toContain('WHERE users.work_status = ?');
            expect(query).toContain('AND users.department = ?');
            expect(query).toContain('AND retreat_records.school_year = ?');
            expect(params).toEqual(['On Leave', 'FFP', '2025-2026']);
        });
    });

    describe('Validation errors', () => {
        it('should return 400 when department is missing', async () => {
            // Arrange
            const requestBody = {
                school_year: '2024-2025',
                work_status: 'Active',
            };

            mockRequest.json.mockResolvedValue(requestBody);

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(pool.execute).not.toHaveBeenCalled();
            expect(NextResponse.json).toHaveBeenCalledWith(
                { error: 'Missing required fields' },
                { status: 400 }
            );
            expect(response.status).toBe(400);
        });

        it('should return 400 when school_year is missing', async () => {
            // Arrange
            const requestBody = {
                department: 'CS',
                work_status: 'Active',
            };

            mockRequest.json.mockResolvedValue(requestBody);

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(pool.execute).not.toHaveBeenCalled();
            expect(NextResponse.json).toHaveBeenCalledWith(
                { error: 'Missing required fields' },
                { status: 400 }
            );
            expect(response.status).toBe(400);
        });

        it('should return 400 when work_status is missing', async () => {
            // Arrange
            const requestBody = {
                department: 'CS',
                school_year: '2024-2025',
            };

            mockRequest.json.mockResolvedValue(requestBody);

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(pool.execute).not.toHaveBeenCalled();
            expect(NextResponse.json).toHaveBeenCalledWith(
                { error: 'Missing required fields' },
                { status: 400 }
            );
            expect(response.status).toBe(400);
        });

        it('should return 400 when all fields are missing', async () => {
            // Arrange
            mockRequest.json.mockResolvedValue({});

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(pool.execute).not.toHaveBeenCalled();
            expect(NextResponse.json).toHaveBeenCalledWith(
                { error: 'Missing required fields' },
                { status: 400 }
            );
            expect(response.status).toBe(400);
        });
    });

    describe('Error handling', () => {
        it('should return 500 when database query fails', async () => {
            // Arrange
            const requestBody = {
                department: 'CS',
                school_year: '2024-2025',
                work_status: 'Active',
            };

            mockRequest.json.mockResolvedValue(requestBody);
            pool.execute.mockRejectedValue(new Error('Database connection failed'));

            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                'API Error:',
                expect.any(Error)
            );
            expect(NextResponse.json).toHaveBeenCalledWith(
                { error: 'Server error' },
                { status: 500 }
            );
            expect(response.status).toBe(500);

            consoleErrorSpy.mockRestore();
        });

        it('should return 500 when JSON parsing fails', async () => {
            // Arrange
            mockRequest.json.mockRejectedValue(new Error('Invalid JSON'));

            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

            // Act
            const response = await POST(mockRequest);

            // Assert
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                'API Error:',
                expect.any(Error)
            );
            expect(NextResponse.json).toHaveBeenCalledWith(
                { error: 'Server error' },
                { status: 500 }
            );
            expect(response.status).toBe(500);

            consoleErrorSpy.mockRestore();
        });
    });

    describe('Different departments', () => {
        const departments = ['Admin', 'FFP', 'CON', 'CSITE', 'SED', 'SLA', 'SMA', 'CS', 'PPO'];

        departments.forEach(dept => {
            it(`should handle ${dept} department correctly`, async () => {
                // Arrange
                const requestBody = {
                    department: dept,
                    school_year: '2024-2025',
                    work_status: 'Active',
                };

                mockRequest.json.mockResolvedValue(requestBody);
                pool.execute.mockResolvedValue([[]]);

                // Act
                await POST(mockRequest);

                // Assert
                expect(pool.execute).toHaveBeenCalledWith(
                    expect.any(String),
                    ['Active', dept, '2024-2025']
                );
                expect(NextResponse.json).toHaveBeenCalledWith({
                    success: true,
                    count: 0,
                    data: [],
                });
            });
        });
    });

    describe('Different work statuses', () => {
        const workStatuses = ['Active', 'Retired', 'Resigned', 'On Leave', 'Transferred'];

        workStatuses.forEach(status => {
            it(`should handle ${status} work_status correctly`, async () => {
                // Arrange
                const requestBody = {
                    department: 'CS',
                    school_year: '2024-2025',
                    work_status: status,
                };

                mockRequest.json.mockResolvedValue(requestBody);
                pool.execute.mockResolvedValue([[]]);

                // Act
                await POST(mockRequest);

                // Assert
                expect(pool.execute).toHaveBeenCalledWith(
                    expect.any(String),
                    [status, 'CS', '2024-2025']
                );
                expect(NextResponse.json).toHaveBeenCalledWith({
                    success: true,
                    count: 0,
                    data: [],
                });
            });
        });
    });
});

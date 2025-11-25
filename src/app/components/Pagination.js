export default function Pagination({ currentPage, totalPages, onPageChange, loading }) {
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            // Show all pages if total is less than max
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            // Adjust if near the beginning
            if (currentPage <= 3) {
                endPage = 4;
            }

            // Adjust if near the end
            if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3;
            }

            // Add ellipsis after first page if needed
            if (startPage > 2) {
                pages.push('...');
            }

            // Add middle pages
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Add ellipsis before last page if needed
            if (endPage < totalPages - 1) {
                pages.push('...');
            }

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    if (totalPages <= 1) {
        return null;
    }

    const pageNumbers = getPageNumbers();

    return (
        <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="text-muted small">
                Page {currentPage} of {totalPages}
            </div>

            <nav>
                <ul className="pagination pagination-sm mb-0">
                    {/* Previous Button */}
                    <li className={`page-item ${currentPage === 1 || loading ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1 || loading}
                        >
                            Previous
                        </button>
                    </li>

                    {/* Page Numbers */}
                    {pageNumbers.map((page, index) => {
                        if (page === '...') {
                            return (
                                <li key={`ellipsis-${index}`} className="page-item disabled">
                                    <span className="page-link">...</span>
                                </li>
                            );
                        }

                        return (
                            <li
                                key={page}
                                className={`page-item ${currentPage === page ? 'active' : ''} ${loading ? 'disabled' : ''}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => onPageChange(page)}
                                    disabled={loading}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}

                    {/* Next Button */}
                    <li className={`page-item ${currentPage === totalPages || loading ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages || loading}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

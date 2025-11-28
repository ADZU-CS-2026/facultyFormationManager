"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchAccountData from "@/app/fetch/fetchAccountData";
import ArchiveSearch from "@/app/components/ArchiveSearch";
import Pagination from "@/app/components/Pagination";

export default function Archive() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Inactive");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const itemsPerPage = 10;

  // Fetch current user account for role
  const { data: account } = useQuery({
    queryKey: ["account"],
    queryFn: fetchAccountData,
  });

  const isAdmin = account?.[0]?.role === "ADMINISTRATOR";

  // Fetch archived users when page, search term, or filter changes
  useEffect(() => {
    fetchArchivedUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchTerm, statusFilter]);

  const fetchArchivedUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      // Build query params
      let endpoint = `/api/user/userarchive/searchuserarchive?page=${currentPage}&limit=${itemsPerPage}`;

      if (searchTerm.trim()) {
        endpoint += `&search=${encodeURIComponent(searchTerm)}`;
      }

      if (statusFilter) {
        endpoint += `&status=${encodeURIComponent(statusFilter)}`;
      }

      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setUsers(result.data);
        setTotalPages(result.totalPages);
        setTotalUsers(result.total);
      } else {
        setError(result.message || 'Failed to fetch archived users');
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (userId) => {
    setUpdatingId(userId);

    try {
      const response = await fetch('/api/user/userarchive/updateuserarchive', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Refresh the current page after successful update
        await fetchArchivedUsers();
        console.log(result.message);
      } else {
        setError(result.message || 'Failed to update user status');
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setUpdatingId(null);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (filter) => {
    setStatusFilter(filter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-success text-white';
      case 'Inactive':
        return 'bg-secondary text-white';
      default:
        return 'bg-secondary text-white';
    }
  };

  return (
    <>
      <div className="w-100">
        <div className="row g-0">
          <div className="col-12 py-4 px-3">
            {/* CARD */}
            <div className="card border-0 border-top border-secondary border-opacity-50 border-3 rounded-1 shadow-sm">
              {/* HEADER */}
              <div
                className="fw-bold fs-6 text-primary border-bottom border-primary p-2 px-3 d-flex align-items-center border-opacity-25"
                style={{ color: "#0c2461" }}
              >
                <i
                  className="bi bi-archive-fill me-2"
                  style={{ fontSize: "18px" }}
                ></i>
                <span style={{ fontSize: "18px" }}>Archived Users</span>
              </div>

              {/* CARD BODY */}
              <div className="p-3 py-2">
                {/* SEARCH */}
                <ArchiveSearch
                  onSearch={handleSearch}
                  onFilterChange={handleFilterChange}
                  loading={loading}
                  currentFilter={statusFilter}
                />

                {/* TABLE */}
                <div className="small">
                  <table className="mt-2 table table-bordered table-striped table-hover">
                    <thead className="border">
                      <tr className="text-start">
                        <th className="bg-tableheadergray">ID</th>
                        <th className="bg-tableheadergray">First Name</th>
                        <th className="bg-tableheadergray">Last Name</th>
                        <th className="bg-tableheadergray">Middle Initial</th>
                        <th className="bg-tableheadergray">Department</th>
                        <th className="bg-tableheadergray">Position</th>
                        <th className="bg-tableheadergray">Office</th>
                        <th className="bg-tableheadergray">Work Status</th>
                        <th className="bg-tableheadergray">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="9" className="text-center text-muted">
                            Loading...
                          </td>
                        </tr>
                      ) : error ? (
                        <tr>
                          <td colSpan="9" className="text-center">
                            <div className="text-danger">
                              {error}
                            </div>
                            <button
                              className="btn btn-sm btn-primary mt-2"
                              onClick={fetchArchivedUsers}
                            >
                              Retry
                            </button>
                          </td>
                        </tr>
                      ) : users.length === 0 ? (
                        <tr>
                          <td colSpan="9" className="text-center text-muted">
                            {searchTerm.trim() ? 'No users found matching your search' : 'No archived users found'}
                          </td>
                        </tr>
                      ) : (
                        users.map((user) => (
                          <tr key={user.id}>
                            <td className="text-start text-muted">{user.id}</td>
                            <td className="text-start text-muted">{user.first_name}</td>
                            <td className="text-start text-muted">{user.last_name}</td>
                            <td className="text-center text-muted">{user.middle_initial || ''}</td>
                            <td className="text-center text-muted">{user.department}</td>
                            <td className="text-start text-muted">
                              {user.position || 'N/A'}
                            </td>
                            <td className="text-start text-muted">
                              {user.office || 'N/A'}
                            </td>
                            <td className="text-center text-muted">
                              {user.work_status}
                            </td>
                            <td className="text-center">
                              <button
                                className="btn btn-sm btn-lightblue text-white fw-semibold"
                                onClick={() => handleToggleStatus(user.id)}
                                disabled={!isAdmin || updatingId === user.id}
                                title={!isAdmin ? 'Only administrators can toggle user status' : `Change to ${user.work_status === 'Active' ? 'Inactive' : 'Active'}`}
                              >
                                {updatingId === user.id ? (
                                  'Updating...'
                                ) : (
                                  'Toggle'
                                )}
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* PAGINATION */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
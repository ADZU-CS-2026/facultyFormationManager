"use client";

import { useState } from "react";

export default function ArchiveSearch({ onSearch, onFilterChange, loading, currentFilter }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleClear = () => {
        setSearchTerm("");
        onSearch("");
    };

    const handleFilterChange = (e) => {
        onFilterChange(e.target.value);
    };

    return (
        <div className="mb-3">
            <form onSubmit={handleSubmit}>
                <div className="row g-2 align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="input-group">
                            <span className="input-group-text bg-light">
                                <i className="bi bi-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name, department, position, or office..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                        <select
                            className="form-select"
                            value={currentFilter}
                            onChange={handleFilterChange}
                            disabled={loading}
                        >
                            <option value="">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-12 d-flex gap-2">
                        <button
                            type="submit"
                            className="btn btn-lightblue text-white fw-semibold flex-grow-1"
                            disabled={loading}
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary fw-semibold"
                            onClick={handleClear}
                            disabled={loading || !searchTerm}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

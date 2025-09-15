export default function notFound(){
    return(
        <div className="p-3">
            {/* ONLY RUN IF REQUESTED URL NOT FOUND */}
            <div className="fw-bold fs-2">Not Found</div>
            <div>The requested URL was not found on this server.</div>
        </div>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotifCard({notif, setNotif}){

    const now = new Date(Date.now());
    const formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const timeOnly = now.toLocaleTimeString(); 

    return(
      <div className="position-fixed" style={{right: "10px", bottom: "10px"}}>
        {/* NOTIFICATION CARD */}
        <div className={`card bg-gray2 text-white ${notif.show ? "d-block" : "d-none"}`} style={{width: "350px"}}>
          <div className="card-header fw-bold d-flex justify-content-between align-items-center">
            <div className="d-flex gap-1 align-items-center">
              <FontAwesomeIcon icon="fa-solid fa-bell" /> {notif.title}
            </div>
            <button className="btn-close" onClick={() => {setNotif({title: "", content: "", show: false})}}></button>
          </div>
          <div className="card-body">
            <div>{notif.content}</div>
          </div>
          <div className="card-footer d-flex align-items-center">
            <div className="small opacity-75">{timeOnly}{"  "}{formattedDate} </div>
          </div>
        </div>
      </div>
    );
}
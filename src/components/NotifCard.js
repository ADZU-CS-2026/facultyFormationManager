import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotifCard({notif, deleteNotif}){

    return(
        <div key={notif.id} className={`card bg-gray2 text-white`} style={{width: "350px"}}>
          <div className="card-header fw-bold d-flex justify-content-between align-items-center">
            <div className="d-flex gap-1 align-items-center">
              <FontAwesomeIcon icon="fa-solid fa-bell" /> {notif.title}
            </div>
            <button className="btn-close" onClick={() => {deleteNotif(notif.id)}}></button>
          </div>
          <div className="card-body">
            <div>{notif.content}</div>
          </div>
          <div className="card-footer d-flex align-items-center">
            <div className="small opacity-75">{notif.time}</div>
          </div>
        </div>
    );
}
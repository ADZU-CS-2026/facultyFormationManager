import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FacebookPage() {
  const [hideFacebook, setHideFacebook] = useState(false);

  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: "v20.0",
          });
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }
  }, []);

  return (
    <div className="card border-0 border-top border-blue border-3 rounded-1 shadow-sm mt-4">
      {/* CARD */}
      {/* CARD HEADER */}
      <div className="text-gray1 border-bottom p-2 px-3 fs-6 d-flex justify-content-between align-items-center">
        <div>
          <FontAwesomeIcon
            icon="fa-brands fa-square-facebook"
            className="fs-6 me-1"
          />
          Official Facebook Page
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setHideFacebook((prev) => (prev ? false : true))}
        >
          <small className="text-lightgray">
            {!hideFacebook ? (
              <FontAwesomeIcon icon="fa-solid fa-minus" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            )}
          </small>
        </span>
      </div>

      {/* CARD BODY */}
      <motion.div
        initial={{ height: "auto", opacity: 1 }}
        animate={hideFacebook ? { height: 0 } : { height: "auto" }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-2">
          <div id="fb-root"></div>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/ateneodezamboangauniversity"
            data-tabs="timeline"
            data-width="500"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>
      </motion.div>
    </div>
  );
}

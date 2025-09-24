'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Snowfall from "../../components/SnowFall";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NProgress from "nprogress";

export default function Home() {

  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [seconds, setSeconds] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const route = useRouter();

  // 60 SECOND COUNTER IF LOGIN ATTEMPT REACH LIMIT
  useEffect(() => {
    if (seconds <= 0) return setError(false);

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  async function login(e) {
    e.preventDefault();
    if (!id || !password){
      setError(true);
      return setMessage("Empty credentials!");
    }

    NProgress.start();
  setTimeout(() => {
    async function login() {

    // LOGIN API FETCH 
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
        credentials: "include"
      });

      if (!res.ok) {
        if(res.status === 429){
          setID("");
          setPassword("");
          setSeconds(60);
          setError(true);
          throw new Error("Too many attempts! Please try again later");
        }
        else if(res.status === 500){
          setError(true);
          throw new Error("No internet connection!");
        }
        setError(true);
        throw new Error("Credentials Incorrect!");
      }
      NProgress.done();
      setError(false);
      route.push("/");
    } catch (err) {
      NProgress.done();
      setMessage(err.message);
    } 
}
login();
}, 2000)
  }

  return (
    <form onSubmit={login}>
      <div className="vw-100 vh-100 login-global-font position-relative">
        <Image
          src="/Images/adzu-picture-1.jpg"
          alt="adzu-image"
          fill
          style={{ objectFit: "cover" }}
        />

        <div
          className="position-relative w-100 h-100"
          style={{ backgroundColor: 'rgba(1, 28, 71, 0.9)' }}
        >
          <Snowfall />
          <div
            className="container-fluid position-absolute d-flex justify-content-center top-50 start-50"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100%", maxWidth: "400px" }}>
              <Image
                src="/Images/adzu-logo-outline.png"
                alt="adzu-logo"
                width={120}
                height={120}
              />
              <div
                className="text-white mt-3 text-center"
                style={{ fontSize: "24px", fontWeight: 800 }}
              >
                ADZU Formation System
              </div>
              <div
                className="fst-italic mb-4 text-center"
                style={{ fontSize: "12.8px", color: "#cccccc" }}
              >
                {"\"Faculty Formation Program Monitoring and Management System\""}
              </div>

              {/* USERNAME OR ID INPUT */}
              <div className="input-wrapper mb-2">
                <FontAwesomeIcon
                  icon={faUser}
                  className="icon"
                />
                <input
                  type="text"
                  className={`form-control ${error && !seconds && "is-invalid"} ${error && !id & "is-invalid"} fw-bold`}
                  placeholder="Admin ID"
                  name="id"
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                  disabled={error && !id && seconds ? true : false}
                />
              </div>

              {/* PASSWORD INPUT */}
              <div className="input-wrapper mb-4">
                <FontAwesomeIcon
                  icon={faLock}
                  className="icon"
                />
                <input
                  type="password"
                  className={`form-control ${error && !seconds && "is-invalid"} ${error && !password && "is-invalid"} fw-bold`}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={error && !password && seconds ? true : false}
                />
              </div>

              {error && (<div className="pb-4 pt-1 text-center" style={{ color: "#cccccc", fontSize: "16px" }}><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" className="me-1" />{message}</div>)}

              <button
                type="submit"
                className="btn btn-yellow text-black fw-bold mb-5"
                style={{ height: "50px", width: "100%", maxWidth: "400px" }}
                disabled={error && seconds ? true : false}
              >
                {error && seconds ? `Try again(${seconds}s)` : "Login"}
              </button>

              <div style={{ color: "#cccccc", fontSize: "16px" }} className="mb-4">
                Forgot your Password{" "}
                <FontAwesomeIcon icon={faCircleQuestion} />
              </div>

              <Image src="/Images/securedbyjojot.png" alt="securedbyjojot" width={106} height={42}/>
              <div style={{color: "#666666", fontSize: "8px"}}>Authentication Service</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function ForgotPassword() {
  const router = useRouter();

  const [count, setCount] = useState(300);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const sendCodeMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post("/api/forgot-password/send");
      return res;
    },
    onSuccess: () => {
      setCount(300);
      setIsCountingDown(true);
      setMessage("Code sent to Administrator email!");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const verifyCodeMutation = useMutation({
    mutationFn: async (code) => {
      const res = await axios.post("/api/forgot-password/verify", { code });
      return res;
    },
    onSuccess: () => {
      // Clear message and redirect to home
      setMessage("Success! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 500);
    },
    onError: (err) => {
      setMessage(err?.response?.data?.message || "Invalid code! Try again");
    },
  });

  const checkExpireMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post("/api/forgot-password/check-expire");
      return res;
    },
    onSuccess: (data) => {
      if (data?.data?.codeExists && !data?.data?.isExpired) {
        const remainingTime = data?.data?.remainingTime || 300;
        setCount(remainingTime);
        setIsCountingDown(true);
      } else {
        setCount(300);
        setIsCountingDown(false);
      }
    },
    onError: async () => {
      setCount(300);
      setIsCountingDown(false);
    },
  });

  function sendCode() {
    sendCodeMutation.mutate();
  }

  useEffect(() => {
    checkExpireMutation.mutate();
  }, []);

  useEffect(() => {
    if (!isCountingDown || count <= 0) {
      if (count <= 0) {
        setIsCountingDown(false);
      }
      return;
    }

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          setIsCountingDown(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isCountingDown, count]);

  function verifyCode() {
    verifyCodeMutation.mutate(code);
  }

  return (
    <div className="vw-100 vh-100 login-global-font position-relative">
      <Image
        src="/Images/adzu-picture-1.jpg"
        alt="adzu-image"
        fill
        style={{ objectFit: "cover" }}
      />

      <div
        className="position-relative w-100 h-100"
        style={{ backgroundColor: "#000A1A" }}
      >
        <div
          className="container-fluid position-absolute d-flex justify-content-center top-50 start-50"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ width: "100%", maxWidth: "400px" }}
          >
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
              className="text-white my-1 text-center fw-semibold"
              style={{ fontSize: "16px" }}
            >
              {"Forgot Password (Admin Only)"}
            </div>
            <div
              className="fst-italic mb-1 text-center"
              style={{ fontSize: "12.8px", color: "#cccccc" }}
            >
              {"Admin - Use the send code to login!"}
            </div>
            <div
              className="fst-italic mb-4 text-center"
              style={{ fontSize: "12.8px", color: "#cccccc" }}
            >
              {"Staff - Ask admin for the password!"}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                verifyCode();
              }}
              className="w-100"
            >
              <div className="input-wrapper my-2">
                <FontAwesomeIcon icon="fa-solid fa-key" className="icon" />
                <input
                  type="text"
                  className={`form-control fw-bold border-0`}
                  placeholder="Input Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    color: "white",
                  }}
                />
              </div>
              {message && (
                <div className="text-white text-center small mb-2">
                  {message}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-yellow text-black fw-bold mt-4"
                style={{ height: "50px", width: "100%", maxWidth: "400px" }}
              >
                Submit
              </button>
            </form>
            <button
              type="submit"
              className="btn btn-lightblue text-white fw-bold mt-3"
              style={{ height: "50px", width: "100%", maxWidth: "400px" }}
              onClick={sendCode}
              disabled={isCountingDown}
            >
              {isCountingDown ? `Resend in ${count}s` : "Send Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

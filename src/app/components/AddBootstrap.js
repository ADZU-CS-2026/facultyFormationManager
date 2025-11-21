"use client";

import { useEffect } from "react";

export default function AddBootstrap() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}

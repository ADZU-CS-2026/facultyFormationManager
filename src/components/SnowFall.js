"use client";

import { useEffect, useRef, useState } from "react";

export default function Snowfall() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const targetFlakes = 20;
    let speedFactor = 0.2;
    const speedIncrement = 0.001;

    function addSnowflake() {
      if (snowflakes.length < targetFlakes) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: 0,
          r: Math.random() * 3 + 2,
          d: Math.random() * 1,
        });
      }
    }

    function drawSnowflake(flake) {
      const { x, y, r } = flake;
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = 0; i < 6; i++) {
        ctx.moveTo(0, 0);
        ctx.lineTo(0, r);
        ctx.rotate(Math.PI / 3);
      }

      ctx.stroke();
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach(drawSnowflake);
      update();
    }

    function update() {
      snowflakes.forEach((flake) => {
        flake.y += (flake.d + 1) * speedFactor;
        flake.x += Math.sin(flake.d);

        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      });

      if (speedFactor < 1) speedFactor += speedIncrement;
    }

    const interval = setInterval(draw, 30);

    const addInterval = setInterval(() => {
      addSnowflake();
      if (snowflakes.length >= targetFlakes) {
        clearInterval(addInterval);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(addInterval);
    };
  }, [mounted]);

  if (!mounted) return null;
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

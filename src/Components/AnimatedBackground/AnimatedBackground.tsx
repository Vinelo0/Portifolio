import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import "./AnimatedBackground.css";

function hexToRgb(hex: string): string | null {
  hex = hex.replace(/^#/, "");
  if (hex.length !== 6) return null;
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

const AnimatedBackground: React.FC = () => {
  const theme = useTheme();

  const backgroundColor = theme.palette.primary.main;
  const particleHex = theme.palette.secondary.main;
  const particleRgb = hexToRgb(particleHex) || "255,255,255";

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let width: number;
    let height: number;
    let ctx: CanvasRenderingContext2D | null = null;
    let circles: Circle[] = [];
    let animateHeader = true;

    class Circle {
      pos: { x: number; y: number };
      alpha: number;
      scale: number;
      velocity: number;

      constructor(private w: number, private h: number) {
        this.pos = { x: Math.random() * w, y: h + Math.random() * 100 };
        this.alpha = 0.1 + Math.random() * 0.3;
        this.scale = 0.1 + Math.random() * 0.3;
        this.velocity = Math.random();
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.alpha <= 0) {
          this.pos = {
            x: Math.random() * this.w,
            y: this.h + Math.random() * 100,
          };
          this.alpha = 0.1 + Math.random() * 0.3;
          this.scale = 0.1 + Math.random() * 0.3;
          this.velocity = Math.random();
        }
        this.pos.y -= this.velocity;
        this.alpha -= 0.0005;

        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(${particleRgb}, ${this.alpha})`;
        ctx.fill();
      }
    }

    function initHeader() {
      if (!headerRef.current) return;
      width = headerRef.current.clientWidth;
      height = headerRef.current.clientHeight;

      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = width;
      canvas.height = height;

      ctx = canvas.getContext("2d");
      if (!ctx) return;

      circles = [];
      for (let i = 0; i < width * 0.5; i++) {
        circles.push(new Circle(width, height));
      }

      animate();
    }

    function animate() {
      if (!ctx) return;
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        circles.forEach((circle) => circle.draw(ctx!));
      }
      requestAnimationFrame(animate);
    }

    initHeader();
    window.addEventListener("resize", initHeader);

    return () => {
      window.removeEventListener("resize", initHeader);
      animateHeader = false;
    };
  }, [particleRgb]);

  return (
    <div
      ref={headerRef}
      className="large-header"
      style={{
        backgroundColor,
      }}
    >
      <canvas ref={canvasRef} />
      {}
    </div>
  );
};

export default AnimatedBackground;

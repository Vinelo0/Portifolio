import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

export default function AnimatedHeader() {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    let width, height, ctx, circles, animateHeader = true;

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      
      if (headerRef.current) {
        headerRef.current.style.height = height + "px";
      }
      
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      // Create particles
      circles = [];
      for (let x = 0; x < width * 0.5; x++) {
        let c = new Circle();
        circles.push(c);
      }
      animate();
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        circles.forEach((circle) => circle.draw());
      }
      requestAnimationFrame(animate);
    }

    function Circle() {
      this.pos = { x: Math.random() * width, y: height + Math.random() * 100 };
      this.alpha = 0.1 + Math.random() * 0.3;
      this.scale = 0.1 + Math.random() * 0.3;
      this.velocity = Math.random();

      this.draw = function () {
        if (this.alpha <= 0) {
          this.pos = { x: Math.random() * width, y: height + Math.random() * 100 };
          this.alpha = 0.1 + Math.random() * 0.3;
          this.scale = 0.1 + Math.random() * 0.3;
          this.velocity = Math.random();
        }
        this.pos.y -= this.velocity;
        this.alpha -= 0.0005;

        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
      };
    }

    initHeader();

    window.addEventListener("resize", initHeader);

    return () => {
      window.removeEventListener("resize", initHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="large-header">
      <canvas ref={canvasRef}></canvas>
      <h1 className="main-title">Spirit</h1>
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';

export default function SignalField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compact = window.matchMedia('(max-width: 700px)').matches;
    const context = canvas.getContext('2d');
    const pointer = { x: -1000, y: -1000 };
    const points = Array.from({ length: compact ? 22 : 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.5,
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00012,
    }));
    let frame;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * scale;
      canvas.height = rect.height * scale;
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      points.forEach((point) => {
        if (!reducedMotion) {
          point.x = (point.x + point.vx + 1) % 1;
          point.y = (point.y + point.vy + 1) % 1;
        }
        const x = point.x * width;
        const y = point.y * height;
        const distance = Math.hypot(x - pointer.x, y - pointer.y);
        const glow = distance < 160 ? 1 - distance / 160 : 0;
        context.beginPath();
        context.fillStyle = `rgba(255, 117, 85, ${0.26 + glow * 0.52})`;
        context.arc(x, y, point.r + glow, 0, Math.PI * 2);
        context.fill();
      });
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const ax = a.x * width;
          const ay = a.y * height;
          const bx = b.x * width;
          const by = b.y * height;
          const distance = Math.hypot(ax - bx, ay - by);
          if (distance < 135) {
            context.beginPath();
            context.strokeStyle = `rgba(155, 184, 255, ${0.12 * (1 - distance / 135)})`;
            context.lineWidth = 1;
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.stroke();
          }
        }
      }
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const move = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}

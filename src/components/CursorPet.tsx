"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

type Laser = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  angle: number;
  distance: number;
};

type Impact = {
  id: number;
  x: number;
  y: number;
};

export default function CursorPet() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const [lasers, setLasers] = useState<Laser[]>([]);
  const [impacts, setImpacts] = useState<Impact[]>([]);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for delay/easing effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Velocity to calculate slight forward tilt when moving fast
  const velocityX = useVelocity(smoothX);
  const tiltX = useTransform(velocityX, [-800, 800], [-25, 25], { clamp: true });
  
  // Custom spring for ship rotation (aiming vs tilting)
  const shipRotation = useSpring(0, { stiffness: 400, damping: 25 });
  const isAimingRef = useRef(false);
  const laserIdCounter = useRef(0);

  // Sync tilt to rotation when not aiming
  useEffect(() => {
    const unsubscribe = tiltX.on("change", (latest) => {
      if (!isAimingRef.current) {
        shipRotation.set(latest);
      }
    });
    return () => unsubscribe();
  }, [tiltX, shipRotation]);

  useEffect(() => {
    // Check if device supports hover (not a touch device) and prefers-reduced-motion
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // We only enable it on desktop/laptops with full motion capabilities
    if (isTouchDevice || isReducedMotion || window.innerWidth < 768) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      // Offset slightly so it follows the bottom-right of the actual cursor
      cursorX.set(e.clientX + 25);
      cursorY.set(e.clientY + 25);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect if hovering over a link or button
      if (target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      
      // Calculate center of the spaceship (container is 45x45)
      const shipX = smoothX.get() + 22.5;
      const shipY = smoothY.get() + 22.5;
      
      const dx = clickX - shipX;
      const dy = clickY - shipY;
      
      // Math.atan2 gives angle in radians. 
      // Spaceship naturally points UP, so we add 90 degrees to point its nose to the cursor.
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = (angleRad * 180) / Math.PI;
      const rotationDeg = angleDeg + 90;
      
      // Quickly aim towards click
      isAimingRef.current = true;
      shipRotation.set(rotationDeg);
      
      // Return to normal tilt tracking after a short delay
      setTimeout(() => {
        isAimingRef.current = false;
      }, 400);

      const distance = Math.sqrt(dx * dx + dy * dy);
      const id = laserIdCounter.current++;
      
      const newLaser: Laser = {
        id,
        startX: shipX,
        startY: shipY,
        endX: clickX,
        endY: clickY,
        angle: angleDeg,
        distance,
      };

      setLasers(prev => [...prev, newLaser]);
      
      // After laser travels (200ms), spawn impact and remove laser
      setTimeout(() => {
        setLasers(prev => prev.filter(l => l.id !== id));
        setImpacts(prev => [...prev, { id, x: clickX, y: clickY }]);
        
        // Remove impact particles after animation (400ms)
        setTimeout(() => {
          setImpacts(prev => prev.filter(i => i.id !== id));
        }, 400);
      }, 200);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, [cursorX, cursorY, smoothX, smoothY, shipRotation]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
        className="hidden md:flex flex-col items-center justify-center w-[45px] h-[45px]"
      >
        <motion.div
          style={{ rotate: shipRotation }}
          animate={{
            scale: isHovering ? 1.3 : 1,
            y: [0, -8, 0], // Gentle float up and down
          }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 20 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Neon Trail Glow */}
          <motion.div
            animate={{
              opacity: isHovering ? 0.7 : 0.3,
              scale: isHovering ? 1.5 : 1,
            }}
            className="absolute w-[60px] h-[60px] bg-cyber-cyan/30 rounded-full blur-[15px] -z-10"
          />
          
          {/* Sparkle particle on hover */}
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-[3px] h-[3px] bg-white rounded-full blur-[1px] shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
            />
          )}

          {/* SVG Spaceship */}
          <div className="relative w-full h-full flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,214,255,0.6)]">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-cyber-cyan">
              {/* Right wing */}
              <polygon points="50,15 90,85 50,70" fill="currentColor" />
              {/* Left wing (purple for 3D cyberpunk lighting) */}
              <polygon points="50,15 50,70 10,85" fill="#8A2BFF" />
              {/* Center neon line */}
              <line x1="50" y1="15" x2="50" y2="70" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            
            {/* Engine Glow Pulse */}
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.4, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[12px] h-[12px] bg-cyber-blue blur-[5px] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* RENDER TWIN LASERS */}
      {lasers.map(laser => (
        <motion.div 
          key={`laser-${laser.id}`}
          initial={{ x: laser.startX, y: laser.startY, rotate: laser.angle }}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 9998, pointerEvents: "none" }}
        >
          {/* Left twin projectile */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: laser.distance }}
            transition={{ duration: 0.2, ease: "linear" }}
            style={{
              position: "absolute",
              top: -8, // Perpendicular offset left
              left: 15, // Start slightly forward from center of ship
              width: "25px",
              height: "2px",
              background: "linear-gradient(90deg, rgba(0,214,255,0) 0%, rgba(0,214,255,1) 80%, rgba(255,255,255,1) 100%)",
              boxShadow: "0 0 8px 2px rgba(0, 214, 255, 0.6)",
              borderRadius: "2px",
            }}
          />
          {/* Right twin projectile */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: laser.distance }}
            transition={{ duration: 0.2, ease: "linear" }}
            style={{
              position: "absolute",
              top: 8, // Perpendicular offset right
              left: 15, // Start slightly forward from center of ship
              width: "25px",
              height: "2px",
              background: "linear-gradient(90deg, rgba(138,43,255,0) 0%, rgba(138,43,255,1) 80%, rgba(255,255,255,1) 100%)",
              boxShadow: "0 0 8px 2px rgba(138, 43, 255, 0.6)",
              borderRadius: "2px",
            }}
          />
        </motion.div>
      ))}

      {/* RENDER IMPACTS */}
      {impacts.map(impact => (
        <div 
          key={`impact-${impact.id}`} 
          style={{ position: "fixed", top: impact.y, left: impact.x, zIndex: 9998, pointerEvents: "none" }}
        >
          {/* Subtle Glow Burst */}
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyber-cyan/50 blur-[3px]"
          />
          {/* Spark Particles */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ 
                  x: Math.cos(angle) * 20, // Explode outward
                  y: Math.sin(angle) * 20, 
                  opacity: 0,
                  scale: 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_4px_rgba(0,214,255,1)]"
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

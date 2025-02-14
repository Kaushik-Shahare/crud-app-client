import React from "react";

const HeaderBanner = () => {
  // Generate raindrop elements
  const raindropElements = Array.from({ length: 30 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2;
    return (
      <div
        key={i}
        className="raindrop"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "50vh",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200vh",
          height: "200vh",
          background: "linear-gradient(45deg, #ff6a00, #ee0979)",
          borderRadius: "50%",
          animation: "rotateBanner 10s infinite linear",
        }}
      />
      {/* Raindrop overlay */}
      <div
        className="rain-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {raindropElements}
      </div>
      <style>{`
        @keyframes rotateBanner {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(150vh); opacity: 0; }
        }
        .raindrop {
          position: absolute;
          top: -100%;
          width: 4px;
          height: 40px;
          background: rgba(255, 255, 255, 0.5);
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default HeaderBanner;

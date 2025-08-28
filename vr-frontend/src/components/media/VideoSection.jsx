import React from "react";

export const VideoSection = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/top-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay">
        <h1>Welcome to My Website</h1>
        <p>This text is centered on top of the video background.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

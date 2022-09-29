import { useRef, useState } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  return { element, triggerFull, exitFull };
  // fullscreen used by element but exit used by document
  // that's how poeple works....
};

export default function App() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are not full");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://apod.nasa.gov/apod/image/1003/AuroraTrails_takasaka.jpg"
          alt="img"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

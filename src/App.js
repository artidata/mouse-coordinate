import "./styles.css";
import { useState } from "react";

export default function App() {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoord({ x: e.screenX, y: e.screenY });
  };

  return (
    <div className="main" onMouseMove={handleMouseMove}>
      <h1>
        Mouse coordinates: {coord.x} {coord.y}
      </h1>
    </div>
  );
}

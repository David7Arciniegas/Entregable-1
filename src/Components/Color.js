import React, { useEffect, useState } from "react";

const Color = () => {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    const callback = (e) => {
      if (e.x < window.innerWidth / 2) {
        setColor("yellow");
      } else {
        setColor("lightblue");
      }
    };

    window.addEventListener("mousemove", callback);

    return () => {
      window.removeEventListener("mousemove", callback);
    };
  }, []);

  return (
    <div className="color" style={{ background: color }}>
      Color
    </div>
  );
};

export default Color;

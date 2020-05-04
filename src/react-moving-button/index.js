import React, { useRef } from "react";

export default ({ radius, children }) => {
  const [hover, setHover] = React.useState(false);
  const circleRef = useRef(null);

  return (
    <>
      <div
        style={{
          backgroundColor: hover ? "red" : "green",
          width: radius + "px",
          height: radius + "px",
          borderRadius: radius / 2 + "px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        ref={circleRef}
        onMouseMove={(e) => {
          if (hover) {
            if (circleRef.current) {
              const boundingRect = circleRef.current.getBoundingClientRect();
              console.log(
                "x correct:",
                e.clientX - boundingRect.left,
                "y correct:",
                e.clientY - boundingRect.top
              );
            }
          } else {
          }
        }}
      >
        <div>{children}</div>
      </div>
      <p>radius:{radius}</p>
    </>
  );
};

import React from "react";

export default ({ radius, children }) => {
  const [hover, setHover] = React.useState(false);
  return (
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
    >
      {children}
    </div>
  );
};

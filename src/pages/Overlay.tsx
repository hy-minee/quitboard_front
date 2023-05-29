import React from "react";

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};

const Overlay: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(77, 119, 81, 1)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Overlay;

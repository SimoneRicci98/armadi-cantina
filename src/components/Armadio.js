import React, { useState } from "react";

const IkeaCloset = () => {
  const [doorStates, setDoorStates] = useState({
    left: false,
    center: false,
    right: false,
  });

  const toggleDoor = (door) => {
    setDoorStates((prevState) => ({
      ...prevState,
      [door]: !prevState[door],
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          width: "450px",
          height: "600px",
          backgroundColor: "white",
          border: "2px solid #e0e0e0",
          display: "flex",
          position: "relative",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "20px 0",
            boxSizing: "border-box",
          }}
        >
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#e0e0e0",
              }}
            />
          ))}
        </div>
        {["left", "center", "right"].map((door) => (
          <div
            key={door}
            style={{
              height: "100%",
              backgroundColor: "white",
              borderRight: door !== "right" ? "1px solid #e0e0e0" : "none",
              position: "absolute",
              top: 0,
              width: "33.33%",
              left:
                door === "left" ? "0" : door === "center" ? "33.33%" : "auto",
              right: door === "right" ? "0" : "auto",
              transition: "transform 0.5s ease-in-out",
              cursor: "pointer",
              transform: doorStates[door]
                ? `rotateY(${door === "right" ? "110deg" : "-110deg"})`
                : "none",
              transformOrigin: door === "right" ? "right" : "left",
            }}
            onClick={() => toggleDoor(door)}
          >
            <div
              style={{
                width: "10px",
                height: "40px",
                backgroundColor: "#c0c0c0",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: door === "right" ? "auto" : "10px",
                left: door === "right" ? "10px" : "auto",
                borderRadius: "5px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IkeaCloset;

import React from "react";

function FileResult({ image }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 20,
        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
        height: "150px",
        width: "150px",
        margin: 10,
      }}
    >
      <img
        src={image}
        style={{ width: "90px", height: "90px" }}
        className="logo"
        alt="logo"
      />
    </div>
  );
}

export default FileResult;

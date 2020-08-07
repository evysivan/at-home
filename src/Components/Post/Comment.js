import React from "react";
import "./post.css";
import styled from "styled-components";

function Comment({ comment, user, indent }) {
  return (
    <div className="StyledComment" style={{ marginRight: indent ? "60px" : '0' }} >
      <p>{user}</p>
      <p style={{ alignSelf: "flex-end" }}>{comment}</p>
    </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         alignItems: "flex-start",
    //         backgroundColor: "white",
    //         borderRadius: 10,
    //         margin: 10,
    //         marginLeft: indent ? 40 : 0,
    //         -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15),
    //   -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15),
    //   box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15),
    //       }}
    //     >

    //     </div>
  );
}

export default Comment;

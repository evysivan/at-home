import React from "react";
import styled from "styled-components";

const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  margin-right: ${(props) => (props.indent ? "60px" : 0)};
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

function Comment({ comment, user, indent }) {
  return (
    <StyledComment indent={indent}>
      <p>{user}</p>
      <p style={{ alignSelf: "flex-end" }}>{comment}</p>
    </StyledComment>
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

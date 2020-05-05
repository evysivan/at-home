import React from "react";
import styled from "styled-components";
import MainPanelThread from "./MainPanelThread";
import Divider from "@material-ui/core/Divider";

const StyledContainer = styled.div`
  box-sizing: border-box;
  /* height: 100%; */
`;

const list = [
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
  {
    room: "Room Name",
    votes: 50,
    details: {
      by: "Evy",
      time: "12:00",
      title: "Bla Bla Bla",
      body: "Blah Blah Blah Blah Blah Blah Blah ",
    },
  },
];

const MainPanelList = () => {
  return (
    <StyledContainer>
      {list.map((item) => (
        <>
          <MainPanelThread item={item} />
          <Divider />
        </>
      ))}
    </StyledContainer>
  );
};

export default MainPanelList;

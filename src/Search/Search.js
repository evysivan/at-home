import React from "react";
import { useSelector } from "react-redux";
import {
  getSearchTerm,
  getAllRooms,
  getAllThreads,
  getAllComments,
} from "../redux/selectors";
import jpg from "../assets/file types/jpg.png";
import pdf from "../assets/file types/pdf.png";
import powerpoint from "../assets/file types/powerpoint.png";
import xls from "../assets/file types/xls.png";
import txt from "../assets/file types/txt.png";
import link from "../assets/file types/link.png";
import LineResult from "./LineResult";
import SidePanelListItem from "../SidePanelListItem";
import FileResult from "./FileResult";
import MainPanelThread from "../MainPanelThread";
import Comment from "../Post/Comment";

function Search(props) {
  const searchTerm = useSelector(getSearchTerm);
  const rooms = useSelector(getAllRooms);
  const threads = useSelector(getAllThreads);
  const comments = useSelector(getAllComments);

  const filteredThreads = threads.filter(
    (thread) =>
      thread.details.title.includes(searchTerm) ||
      thread.room.title.includes(searchTerm)
  );
  const filteredComments = comments.filter((comment) => !comment.indent);

  const relevantRooms = rooms.slice(0, 3);

  return (
    <div style={{ flex: 1 }}>
      <div>
        <div
          style={{
            height: "5vh",
            backgroundColor: "white",
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0, marginLeft: 30 }}>
            Search results for: {searchTerm}
          </p>
        </div>
        <div
          style={{
            height: "80vh",
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "50%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginLeft: 30,
                marginBottom: 20,
                backgroundColor: "white",
                boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <p
                style={{
                  fontSize: 30,
                  marginLeft: 5,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Rooms
              </p>
              {relevantRooms.map((room) => (
                <LineResult room={room} />
              ))}
            </div>
            <div
              style={{
                overflow: "hidden",
                marginLeft: 30,
                marginBottom: 20,
                backgroundColor: "white",
                boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <p
                style={{
                  fontSize: 30,
                  marginLeft: 5,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Threads
              </p>
              <div
                style={{
                  height: "90%",
                  overflow: "scroll",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                {filteredThreads.map((thread) => (
                  <MainPanelThread
                    item={thread}
                    style={{ width: "100%", fontSize: 18 }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "50%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginBottom: 20,
                backgroundColor: "white",
                boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
                borderRadius: 10,
                marginRight: 30,
                padding: 10,
              }}
            >
              <p
                style={{
                  fontSize: 30,
                  marginLeft: 5,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Files
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <FileResult image={jpg} />
                <FileResult image={pdf} />
                <FileResult image={powerpoint} />
                <FileResult image={xls} />
                <FileResult image={txt} />
                <FileResult image={link} />
              </div>
            </div>
            <div
              style={{
                marginBottom: 20,
                backgroundColor: "white",
                boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.15)",
                borderRadius: 10,
                marginRight: 30,
                padding: 10,
                overflow: "hidden",
              }}
            >
              <p style={{ fontSize: 30 }}>Comments</p>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  overflow: "auto",
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                {filteredComments.map((comment) => (
                  <Comment comment={comment.comment} user={comment.user} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

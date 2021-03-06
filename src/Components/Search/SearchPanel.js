import React, { useState } from "react";
import "../../App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllRooms,
  getAllSubscribedRooms,
  getUser,
} from "../../redux/selectors";
import { setSearchTerm } from "../../redux/actions";
import { Link } from "react-router-dom";
import { setRoom } from "../../redux/actions";
import {
  subscribeUserToRoom,
  unsubscribeUserToRoom,
} from "../../api/userCollection";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  Autocomplete: {
    width: "80%",
  },
});
function SearchPanel() {
  const [searchText, setSearchText] = useState("");
  const rooms = useSelector(getAllRooms);
  const subscriptions = useSelector(getAllSubscribedRooms);
  const options = rooms ? rooms : [];
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector(getUser);

  const isRoomSubscribed = (id) => {
    if (subscriptions.filter((room) => room.id == id).length > 0) return true;
    return false;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", flex: 0.8 }}>
      <Autocomplete
        clearOnBlur={false}
        className={classes.Autocomplete}
        // onBlur={() => setSearchText("")}
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) => option.title}
        renderOption={(option) => (
          <Link style={{ width: "100%" }} to="/room">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                dispatch(setRoom(option));
              }}
            >
              <p>{option.title}</p>
              <Button
                style={{ margin: 5 }}
                variant="outlined"
                color="default"
                startIcon={<AddIcon />}
                onClick={() => {
                  if (isRoomSubscribed(option.id))
                    unsubscribeUserToRoom(user, option.id);
                  else {
                    subscribeUserToRoom(user, option.id);
                  }
                }}
              >
                {isRoomSubscribed(option.id) ? "Unsubscribe" : "Subscribe"}
              </Button>
            </div>
          </Link>
        )}
        renderInput={(params) => (
          <TextField
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            {...params}
            label="Search"
            variant="outlined"
          />
        )}
      />
      <IconButton
        onClick={() => dispatch(setSearchTerm(searchText))}
        disabled={!searchText}
        color="default"
        aria-label=""
      >
        <Link to="/search">
          <SearchIcon />
        </Link>
      </IconButton>
    </div>
  );
}

export default SearchPanel;

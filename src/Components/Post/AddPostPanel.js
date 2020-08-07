import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import TextField from "@material-ui/core/TextField";

const AddPostPanel = () => {
    return (
        <ExpansionPanel style={{ width: "50%" }}>
            <ExpansionPanelSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
            >
                <p style={{ margin: 0 }}>Add Post</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                style={{ display: "flex", flexDirection: "column" }}
            >
                <TextField
                    style={{ width: "80%" }}
                    id="standard-basic"
                    label="Standard"
                />
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
                <input type="submit" />
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">
                    Save
            </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    );
};

export default AddPostPanel;

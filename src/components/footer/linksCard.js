import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    display: "flex",
    width: "100%",
    overflow: "auto",
    padding: 0,
    backgroundColor: "lightgreen",
  },
});
const LinksCard = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.list}>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
      </List>
    </div>
  );
};

export default LinksCard;

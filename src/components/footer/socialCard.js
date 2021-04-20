import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Insta from "@material-ui/icons/Instagram";
import YT from "@material-ui/icons/YouTube";
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  list: {
    display: "flex",
    width: "100%",
    overflow: "auto",
    padding: "auto",
    alignSelf: "center",
    backgroundColor: "lightgreen",
  },
});
const SocialCard = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.list}>
        <ListItem>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="Instagram"
          >
            <Insta />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="You Tube"
          >
            <YT />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="Twitter"
          >
            <Twitter />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
};

export default SocialCard;

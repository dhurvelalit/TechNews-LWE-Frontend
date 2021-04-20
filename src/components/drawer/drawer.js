import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconButton from "@material-ui/core/IconButton";
import Insta from "@material-ui/icons/Instagram";
import YT from "@material-ui/icons/YouTube";
import Twitter from "@material-ui/icons/Twitter";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "75vw",
  },
  social: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  drawer: {
    flexShrink: 0,
  },
}));

const TechNewsDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const func = () => {
    setDrawerOpen(!drawerOpen);
  };

  const classes = useStyles();

  const listItems = [
    "Engineering",
    "Science",
    "Market",
    "Start-ups",
    "Technology",
    "Educational",
    "Funding",
    "Internet",
    "Electric Vehicles",
    "Research",
    "More",
  ];

  const list = () => {
    return (
      <div>
        <div className={classes.social}>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="Instagram"
          >
            <Insta />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="You Tube"
          >
            <YT />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="Twitter"
          >
            <Twitter />
          </IconButton>
        </div>
        <List className={classes.list}>
          {listItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {text[0].toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={func}
        className={classes.drawer}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default TechNewsDrawer;

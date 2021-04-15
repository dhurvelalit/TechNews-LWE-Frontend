import { React, useState } from "react";
import TechNewsAppBar from "../../components/appBar/appBar";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import NewsItems from "./newsItems";
import "./home.css";

const useStyles = makeStyles({
  list: {
    width: "75vw",
  },
});

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const func = () => {
    setDrawerOpen(!drawerOpen);
  };

  const classes = useStyles();

  const list = () => (
    <div role="presentation">
      <List className={classes.list}>
        {[
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.list}>
        {[
          "All mail",
          "Trash",
          "Spam",
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <TechNewsAppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <NewsItems />
      <div>
        <Drawer open={drawerOpen} onClose={func}>
          {list()}
        </Drawer>
      </div>
    </div>
  );
};

export default HomePage;

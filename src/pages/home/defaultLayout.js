import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewsItems from "../../components/news/newsItems";
import SideBar from "../../components/sideBar/sideBar";
import NewsArticle from "../../components/news/newsArticle";
import DefaultFooter from "../../components/footer/defaultFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: theme.spacing(12),
  },
}));

export default function DefaultLayout() {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(true);
  const open = true;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          {open ? <NewsArticle /> : <NewsItems />}
        </Grid>
        <Grid item xs={12} sm={3}>
          <SideBar />
        </Grid>
        <Grid item xs={12}>
          <DefaultFooter />
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../../components/newsCards/card";
import PreviousNewsCard from "../../components/newsCards/previousNewsCard";

const useStyles = makeStyles((theme) => ({
  newsArticles: {
    width: "100%",
    height: "80vh",
    overflow: "auto",
    padding: theme.spacing(2),
    borderRadius: "0.5em",
  },
}));

const NewsItems = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.newsArticles} elevation={8}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Today's News
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewsCard />
        </Grid>
        <Grid item xs={12}>
          Previous News
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PreviousNewsCard />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewsItems;

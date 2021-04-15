import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import ButtonBase from "@material-ui/core/ButtonBase";
import { Image } from "@material-ui/icons";
import Pic from "./image.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: theme.spacing(12),
  },
  paper: {
    width: "100%",
    padding: theme.spacing(1),
    borderRadius: 12,
    backgroundColor: "lightGreen",
  },

  Image: {
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: 8,
    backgroundColor: "lightBlue",
    color: theme.palette.text.secondary,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function NewsItems() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={6}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                image
              </Grid>
              <Grid item xs={8}>
                dignissimos exercitationem placeat. Similique sunt minus dolor
                in! Quidem, maxime quod?
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={6}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={12}>
                <Paper className={classes.Image} elevation={0}>
                  <img src={Pic} alt="temp" className={classes.img}></img>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={12}>
                News Title
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={6}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                image
              </Grid>
              <Grid item xs={8}>
                dignissimos exercitationem placeat. Similique sunt minus dolor
                in! Quidem, maxime quod?
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={6}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                image
              </Grid>
              <Grid item xs={8}>
                dignissimos exercitationem placeat. Similique sunt minus dolor
                in! Quidem, maxime quod?
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideBarCard from "../../components/sideBar/sideBarCard";
import { GridList, GridListTile } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: theme.spacing(12),
  },
  sideBar: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "100%",
      height: "80vh",
      overflow: "auto",
      padding: theme.spacing(2),
      borderRadius: "0.5em",
    },
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
  tile: {},
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.sideBar} elevation={8}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SideBarCard />
          </Grid>
          <Grid item xs={12}>
            <SideBarCard />
          </Grid>
          <Grid item xs={12}>
            <SideBarCard />
          </Grid>
          <Grid item xs={12}>
            <SideBarCard />
          </Grid>
          <Grid item xs={12}>
            <SideBarCard />
          </Grid>
        </Grid>
      </Paper>
      <GridList
        className={classes.gridList}
        align={"center"}
        spacing={2}
        cols={2.15}
      >
        <GridListTile className={classes.tile}>
          <SideBarCard />
        </GridListTile>
        <GridListTile className={classes.tile}>
          <SideBarCard />
        </GridListTile>
        <GridListTile className={classes.tile}>
          <SideBarCard />
        </GridListTile>
        <GridListTile className={classes.tile}>
          <SideBarCard />
        </GridListTile>
        <GridListTile className={classes.tile}>
          <SideBarCard />
        </GridListTile>
        <GridListTile className={classes.tile}>
          <SideBarCard />
        </GridListTile>
      </GridList>
    </>
  );
};

export default SideBar;

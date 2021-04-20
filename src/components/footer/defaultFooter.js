import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterCard from "./linksCard";
import SocialCard from "./socialCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "red",
  },
}));
const DefaultFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} align={"center"}>
        <Grid item xs={12} sm={6}>
          <SocialCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FooterCard />
        </Grid>
        <Grid item xs={12}>
          Copyright
        </Grid>
      </Grid>
    </div>
  );
};

export default DefaultFooter;

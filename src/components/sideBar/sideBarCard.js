import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Pic from "../../assets/images/image.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0.5em",
    backgroundColor: "lightgreen",
    margin: theme.spacing(1),
    zIndex: theme.zIndex.drawer - 1,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function SideBarCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardContent>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item sm={12}>
            <img src={Pic} alt="" className={classes.img} />
          </Grid>
          <Grid item sm={12}>
            <Typography variant="body" component="p" align="center">
              side bar link
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

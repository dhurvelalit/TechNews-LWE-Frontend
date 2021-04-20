import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Pic from "../../assets/images/image.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    borderRadius: "0.5em",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default function NewsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardContent>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={5} sm={12}>
            <img src={Pic} alt="" className={classes.img} />
          </Grid>
          <Grid item xs={7} sm={12}>
            <Typography variant="h6" component="h2">
              News Title
            </Typography>
            <br></br>
            <Typography variant="body2" component="p">
              Some extract from the news
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

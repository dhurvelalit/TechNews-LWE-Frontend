import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Pic from "../../assets/images/image.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PreviousNewsCard from "../newsCards/previousNewsCard";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "0.5em",
    maxHeight: "80vh",
    overflow: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "80%",
    },
  },
  content: {
    padding: theme.spacing(2),
  },
  related: {
    marginTop: theme.spacing(4),
  },
}));
const NewsArticle = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.card} elevation={5}>
        <CardContent>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12}>
              <img src={Pic} alt="" className={classes.img} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h2"
                className={classes.content}
              >
                News Title
              </Typography>
              <br></br>
              <Typography
                variant="body2"
                component="p"
                className={classes.content}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                molestias minima, et sed vitae tempora eaque necessitatibus
                consectetur quod voluptatibus! In accusamus earum veritatis
                labore dolore quisquam provident commodi dolorem. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Itaque est
                sapiente quis debitis cupiditate incidunt deserunt consectetur
                labore quasi fugit illo facere officiis dignissimos, commodi
                necessitatibus facilis exercitationem rerum? Est. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Iste nulla
                laudantium ratione aspernatur eveniet harum impedit aperiam ea
                ducimus voluptatibus quisquam nostrum quia, quidem deserunt!
                Quidem molestiae quibusdam modi expedita. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Nulla molestias minima, et
                sed vitae tempora eaque necessitatibus consectetur quod
                voluptatibus! In accusamus earum veritatis labore dolore
                quisquam provident commodi dolorem. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Itaque est sapiente quis debitis
                cupiditate incidunt deserunt consectetur labore quasi fugit illo
                facere officiis dignissimos, commodi necessitatibus facilis
                exercitationem rerum? Est. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Iste nulla laudantium ratione
                aspernatur eveniet harum impedit aperiam ea ducimus voluptatibus
                quisquam nostrum quia, quidem deserunt! Quidem molestiae
                quibusdam modi expedita. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nulla molestias minima, et sed vitae tempora
                eaque necessitatibus consectetur quod voluptatibus! In accusamus
                earum veritatis labore dolore quisquam provident commodi
                dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Itaque est sapiente quis debitis cupiditate incidunt
                deserunt consectetur labore quasi fugit illo facere officiis
                dignissimos, commodi necessitatibus facilis exercitationem
                rerum? Est. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Iste nulla laudantium ratione aspernatur eveniet harum
                impedit aperiam ea ducimus voluptatibus quisquam nostrum quia,
                quidem deserunt! Quidem molestiae quibusdam modi expedita. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                molestias minima, et sed vitae tempora eaque necessitatibus
                consectetur quod voluptatibus! In accusamus earum veritatis
                labore dolore quisquam provident commodi dolorem. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Itaque est
                sapiente quis debitis cupiditate incidunt deserunt consectetur
                labore quasi fugit illo facere officiis dignissimos, commodi
                necessitatibus facilis exercitationem rerum? Est. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Iste nulla
                laudantium ratione aspernatur eveniet harum impedit aperiam ea
                ducimus voluptatibus quisquam nostrum quia, quidem deserunt!
                Quidem molestiae quibusdam modi expedita. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Nulla molestias minima, et
                sed vitae tempora eaque necessitatibus consectetur quod
                voluptatibus! In accusamus earum veritatis labore dolore
                quisquam provident commodi dolorem. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Itaque est sapiente quis debitis
                cupiditate incidunt deserunt consectetur labore quasi fugit illo
                facere officiis dignissimos, commodi necessitatibus facilis
                exercitationem rerum? Est. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Iste nulla laudantium ratione
                aspernatur eveniet harum impedit aperiam ea ducimus voluptatibus
                quisquam nostrum quia, quidem deserunt! Quidem molestiae
                quibusdam modi expedita. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nulla molestias minima, et sed vitae tempora
                eaque necessitatibus consectetur quod voluptatibus! In accusamus
                earum veritatis labore dolore quisquam provident commodi
                dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Itaque est sapiente quis debitis cupiditate incidunt
                deserunt consectetur labore quasi fugit illo facere officiis
                dignissimos, commodi necessitatibus facilis exercitationem
                rerum? Est. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Iste nulla laudantium ratione aspernatur eveniet harum
                impedit aperiam ea ducimus voluptatibus quisquam nostrum quia,
                quidem deserunt! Quidem molestiae quibusdam modi expedita.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.related}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12}>
            Checkout Similar News
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
      </div>
    </React.Fragment>
  );
};

export default NewsArticle;

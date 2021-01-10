import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 30,
    maxWidth: 250,
  },
}));

export default function UserDetails() {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const history = useHistory();

  const addToShortlist = (candidate) => {
    let parsedData = [];
    let newData = [];
    const data = localStorage.getItem("shortlist");
    if (data !== null && data.length !== 0) {
      parsedData = JSON.parse(data);
      newData = [...parsedData];
      newData.push(candidate);
    } else {
      newData.push(candidate);
    }
    localStorage.setItem("shortlist", JSON.stringify(newData));
    history.push("/");
  };

  const addToRejectlist = (candidate) => {
    let parsedData = [];
    let newData = [];
    const data = localStorage.getItem("reject");
    if (data !== null && data.length !== 0) {
      parsedData = JSON.parse(data);
      newData = [...parsedData];
      newData.push(candidate);
    } else {
      newData.push(candidate);
    }
    localStorage.setItem("reject", JSON.stringify(newData));
    history.push("/");
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("selectedCard"));
    setUser(data);
    console.log(data);
  }, []);

  return (
    <>
      <Grid
        xs={12}
        sm={12}
        md={12}
        className={classes.root}
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              height="200"
              image={user.Image}
              title={user.name}
            />
            <CardContent>
              <Typography>{user.id}</Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {user.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => addToShortlist(user)}
            >
              Shortlist
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => addToRejectlist(user)}
            >
              Reject
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

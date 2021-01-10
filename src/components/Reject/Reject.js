import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    textAlign: "center",
    margin: 30,
  },
  grid: {
    display: "flex",
    marginTop: 20,
  },
  card: {
    margin: 10,
  },
}));

export default function Reject() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reject"));
    console.log(data);
    setUsers(data);
  }, []);

  return (
    <div>
      <Typography className={classes.title} component="h2" variant="h4">
        Rejected Candidates
      </Typography>
      <Grid
        className={classes.grid}
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {users ?users.map((user, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
              </Card>
            </Grid>
          );
        }):<Typography className={classes.title} component="h2" variant="h4">
        No Candidates Added Yet!
      </Typography>}
      </Grid>
    </div>
  );
}

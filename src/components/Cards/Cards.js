import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    marginTop: 20,
  },
  card: {
    margin: 10,
  },
  forms: {
    textAlign: "center",
    margin: 30,
  },
}));

export default function Cards() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  const goToCarddetails = (card) => {
    const data = JSON.stringify(card);
    localStorage.setItem("selectedCard", data);
    history.push(`/user/${card.id}`);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      );
      const data = response.data;
      console.log(data);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <form className={classes.forms} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Search"
          onChange={(e) => searchSpace(e)}
        />
      </form>
      <Grid
        className={classes.grid}
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {users &&
          users
            .filter((data) => {
              if (search === "") {
                return data;
              } else if (
                data.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return data;
              }
            })
            .map((user, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    className={classes.card}
                    onClick={() => goToCarddetails(user)}
                  >
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
            })}
      </Grid>
    </div>
  );
}

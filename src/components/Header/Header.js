import React from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Job Portal
          </Typography>
          <Button color="inherit" onClick={() => history.push("/shortlisted")}>
            Shortlisted
          </Button>
          <Button color="inherit" onClick={() => history.push("/rejected")}>
            Rejected
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

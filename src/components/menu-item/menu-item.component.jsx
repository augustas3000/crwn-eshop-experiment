import React from "react";
import "./menu-item.styles.scss";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuItem: {
    backgroundImage: ({imageUrl}) => `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: ({size}) => size === "large" ? 360 : 240,
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: 'none',

    "& .content": {
      height: 90,
      padding: "0 25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",

      "& .title": {
        fontWeight: "bold",
        marginBottom: 6,
        fontSize: 22,
        color: "#4a4a4a",
      },

      "& .subtitle": {
        fontWeight: "lighter",
        fontSize: 16,
      },
    },
  },
}));

const MenuItem = ({ title, imageUrl, size }) => {
  const classes = useStyles({ size, imageUrl });

  return (
    <Grid item xs={12} sm={size === "large" ? 6 : 4}>
      <Paper className={classes.menuItem}>
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </Paper>
    </Grid>
  );
};

export default MenuItem;

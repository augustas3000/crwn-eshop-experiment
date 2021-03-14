import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuItem: {
    height: ({size}) => size === "large" ? 360 : 240,
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    boxShadow: 'none',
    overflow: 'hidden',

    "& .backgroundImageClass": {
      backgroundImage: ({imageUrl}) => `url(${imageUrl})`,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },


    "&:hover": {
      cursor: 'pointer',
    
      "& .backgroundImageClass": {
        transform: 'scale(1.1)',
        transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
      },
    
      "& .content": {
        opacity: 0.9
      }
    },

    "& .content": {
      height: 90,
      padding: "0 25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
      backgroundColor: 'white',
      opacity: 0.7,
      position: 'absolute',

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
    }
  },
}));


const MenuItem = ({ title, imageUrl, size }) => {
  const classes = useStyles({ size, imageUrl });

  return (
    <Grid item xs={12} sm={size === "large" ? 6 : 4}>
      <Paper className={classes.menuItem}>

        <div
          className="backgroundImageClass"
        />

        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </Paper>
    </Grid>
  );
};

export default MenuItem;

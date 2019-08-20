// import React from "react";

// import "./styled.scss";

// const BreadCrumbs = ({ firstName, lastName, navItem }) => (
//   <div className="breadcrumbs">
//     <span
//       className="crumb"
//       onClick={() => console.log("click")}
//     >{`${navItem}`}</span>

//     <span
//       className="crumb"
//       onClick={() => console.log("click")}
//     >{` / ${firstName} ${lastName}`}</span>
//   </div>
// );

// export default BreadCrumbs;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const BreadCrumbs = ({ firstName, lastName, navItem }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            className={classes.link}
            color="inherit"
            href="/"
            onClick={handleClick}
          >
            {navItem}
          </Link>
          <Typography
            className={classes.lastCrumb}
            color="textPrimary"
          >{`${firstName} ${lastName}`}</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    whiteSpace: "nowrap"
  },
  separator: {
    fontSize: "21px",
    color: "#9e9e9e"
  },
  paper: {
    padding: theme.spacing(1, 2)
  },
  link: {
    fontSize: "21px",
    color: "#9e9e9e",
    textTransform: "capitalize"
  },
  lastCrumb: {
    fontSize: "21px",
    color: "#616161",
    textTransform: "capitalize"
  }
}));

function handleClick(event) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}

export default BreadCrumbs;

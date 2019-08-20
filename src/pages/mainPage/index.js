import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Header from "../../components/header";
import MainContent from "../../components/main";
import CustomButton from "../../components/customButton";
import { ReactComponent as WatchIcon } from "../../assets/icons/outline-watch_later-24px.svg";
import { ReactComponent as FileIcon } from "../../assets/icons/baseline-archive-24px.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/baseline-send-24px.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/baseline-delete-24px.svg";

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Header />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="hr">
            <ListItemIcon>
              <WatchIcon />
            </ListItemIcon>
            <ListItemText primary="human resources" />
          </ListItem>

          <ListItem button key="hire">
            <ListItemIcon>
              <FileIcon />
            </ListItemIcon>
            <ListItemText primary="hire clinicians" />
          </ListItem>

          <ListItem button key="messages">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="messages" />
          </ListItem>

          <ListItem button key="profile">
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="agency profile" />
          </ListItem>
        </List>
        <div className={classes.buttonWrapper}>
          <CustomButton color={vars.orangeColor} text="help" />
        </div>
      </Drawer>
      <main className={classes.content}>
        <MainContent />
      </main>
    </div>
  );
}

const vars = {
  drawerWidth: 280,
  mainColor: "#21C9E7",
  orangeColor: "#ff844b"
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${vars.drawerWidth}px)`,
    marginLeft: vars.drawerWidth,
    boxShadow: "none"
  },
  drawer: {
    width: vars.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: vars.drawerWidth,
    backgroundColor: vars.mainColor,
    borderRadius: "0 20px 0 0",
    color: "white",
    textTransform: "capitalize",
    fill: "white"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    width: `calc(100% - ${vars.drawerWidth}px)`,
    backgroundColor: "#EBF2F3",
    paddingTop: "80px"
  },
  buttonWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    padding: "160px 50px"
  }
}));

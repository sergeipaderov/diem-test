import { withStyles } from "@material-ui/core/styles";
import MuiList from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import MuiListItemAvatar from "@material-ui/core/ListItemAvatar";
import MuiListItemText from "@material-ui/core/ListItemText";

export const ContainerList = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    paddingBottom: 0
  }
})(MuiList);

export const ItemList = withStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0
  }
})(MuiListItem);

export const IconContainer = withStyles({
  root: {
    minWidth: 45
  }
})(MuiListItemAvatar);

export const IconStyle = {
  fill: "#21c9e7"
};

export const TextItem = withStyles({
  root: {
    fontSize: "16px",
    fontFamily: "'Nunito', sans-serif",
    marginTop: 0,
    marginBottom: "20px",
    color: "#616161"
  },
  secondary: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "12px",
    color: "#9E9E9E"
  }
})(MuiListItemText);

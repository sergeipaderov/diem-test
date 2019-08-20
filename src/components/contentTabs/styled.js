import { withStyles } from "@material-ui/core/styles";
import MuiTabs from "@material-ui/core/Tabs";
import MuiTab from "@material-ui/core/Tab";

export const Tabs = withStyles({
  root: {
    display: "flex",
    flexGrow: 1
  }
})(MuiTabs);

export const Tab = withStyles({
  root: {
    textTransform: "capitalize",
    fontSize: "20px",
    fontFamily: "'Nunito', sans-serif",
    color: "#E9E9E",
    fontWeight: 600
  },
  selected: {
    color: "#21C9E7"
  }
})(MuiTab);

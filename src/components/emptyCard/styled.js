import { withStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import MuiCardContent from "@material-ui/core/CardContent";
import { hidden } from "ansi-colors";

export const Card = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    borderRadius: "10px",
    margin: "15px 0 0"
  }
})(MuiCard);

export const CardContent = withStyles({
  root: {
    padding: "25px 20px",
    overflow: "hidden"
  }
})(MuiCardContent);

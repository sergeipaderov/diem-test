import { withStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import MuiTypography from "@material-ui/core/Typography";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiCardContent from "@material-ui/core/CardContent";
import MuiCardActions from "@material-ui/core/CardActions";
import MuiButton from "@material-ui/core/Button";

export const Card = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    borderRadius: "10px",
    margin: "15px 0"
  }
})(MuiCard);

export const HeaderCard = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    lineHeight: "1"
  }
})(MuiTypography);

export const HeaderTitle = withStyles({
  root: {
    fontFamily: "'Nunito', sans-serif",
    padding: 0,
    fontSize: "16px",
    color: "#616161"
  }
})(MuiTypography);

export const IconStyle = {
  fill: "#9E9E9E"
};

export const ButtonHeader = withStyles({
  root: {
    padding: 0
  }
})(MuiIconButton);

export const CardContent = withStyles({
  root: {
    padding: "25px 15px",
    overflow: "hidden"
  }
})(MuiCardContent);

export const ContentItem = withStyles({
  root: {
    display: "flex",
    fontFamily: "'Nunito', sans-serif",
    padding: "25px 10px 0 0",
    fontSize: "15px",
    color: "#9E9E9E"
  }
})(MuiTypography);

export const CardFooter = withStyles({
  root: {
    display: "flex",
    justifyContent: "flex-end"
  }
})(MuiCardActions);

export const ButtonFooter = withStyles({
  root: {
    color: "#21c9e7"
  }
})(MuiButton);

export const ButtonStyle = {
  color: "#21c9e7",
  cursor: "pointer"
};

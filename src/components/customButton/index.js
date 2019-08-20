import React from "react";

import Button from "@material-ui/core/Button";

const CustomButton = props => {
  return (
    <Button
      style={{
        backgroundColor: props.color,
        padding: "5px 0",
        fontSize: "16px",
        textTransform: "capitalize",
        color: "#fff",
        width: "100%"
      }}
      variant="contained"
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;

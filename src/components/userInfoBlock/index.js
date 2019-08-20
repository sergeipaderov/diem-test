import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiIconButton from "@material-ui/core/IconButton";

import { ReactComponent as ArrowDownIcon } from "../../assets/icons/baseline-expand_more-24px.svg";
import avatar from "../../assets/avatar.png";

import "./styled.scss";

// Фото/аватар захардкодил для упрощения верстки

const UserInfoBLock = ({ name }) => (
  <div className="user-info-block">
    <div className="photo-container">
      <img src={avatar} alt="avatar" />
    </div>
    <span>{name}</span>
    <ButtonHeader onClick={() => console.log("click")}>
      <ArrowDownIcon style={{ fill: "#616161" }} />
    </ButtonHeader>
  </div>
);

const ButtonHeader = withStyles({
  root: {
    padding: 0,
    display: "flex",
    alignItems: "center"
  }
})(MuiIconButton);

export default UserInfoBLock;

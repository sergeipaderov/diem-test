import React from "react";

import { ReactComponent as NoneFilledIcon } from "../../assets/icons/baseline-notifications_none-24px.svg";

import "./styled.scss";

const NotificationIcon = ({ isExistNotification }) => (
  <div className="notification-icon" onClick={() => console.log("click")}>
    <NoneFilledIcon className="notfilled-icon" />
  </div>
);

export default NotificationIcon;

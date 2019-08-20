import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiIconButton from "@material-ui/core/IconButton";
import BreadCrumbs from "../breadCrumbs";
import SearchBox from "../searchBox";
import { ReactComponent as MenuIcon } from "../../assets/icons/baseline-dehaze-24px.svg";
import NotificationIcon from "../notificationIcon";
import UserInfoBLock from "../userInfoBlock";

import { profile } from "../../mock";

import "./styled.scss";

class Header extends Component {
  state = {
    profile,
    searchField: "",
    navItem: "Human Resources",
    isExistNotification: false,
    user: {
      name: "jeniffer"
    }
  };

  handleChangeSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { navItem } = this.state;
    const { firstName, lastName } = this.state.profile;
    const { name } = this.state.user;

    return (
      <div className="header">
        <div className="subheader">
          {/* <div className="menu-container">
            <MenuIcon className="menu-icon" />
          </div> */}

          <ButtonMenu onClick={() => console.log("click")}>
            <MenuIcon style={{ fill: "#21C9E7" }} />
          </ButtonMenu>

          <BreadCrumbs
            navItem={navItem}
            firstName={firstName}
            lastName={lastName}
          />
        </div>
        <div className="subheader">
          <SearchBox
            placeholder="Search..."
            handleChange={this.handleChangeSearch}
          />
          <NotificationIcon />
          <UserInfoBLock name={name} />
        </div>
      </div>
    );
  }
}

const ButtonMenu = withStyles({
  root: {
    alignItems: "center"
  }
})(MuiIconButton);

export default Header;

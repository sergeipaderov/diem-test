import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/baseline-search-24px.svg";

import "./styled.scss";

const SearchBox = ({ placeholder, handleChange }) => (
  <div className="search-box">
    <div className="icon-container">
      <SearchIcon className="search-icon" />
    </div>
    <input
      className="search-input"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;

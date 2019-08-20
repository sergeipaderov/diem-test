import React from "react";

import "./styled.scss";

const SpecItem = props => (
  <div className="spec-info">
    <span>{props.item}</span>
  </div>
);

export default SpecItem;

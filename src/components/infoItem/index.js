import React from "react";

import "./styled.scss";

const ItemInfo = props => (
  <div className="item-info">
    <span>{props.item}</span>
  </div>
);

export default ItemInfo;

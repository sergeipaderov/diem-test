import React from "react";

import { Card, CardContent } from "./styled";

const EmptyCard = props => {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default EmptyCard;

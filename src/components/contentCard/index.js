import React from "react";
import Divider from "@material-ui/core/Divider";

import { ReactComponent as IconExpandLess } from "../../assets/icons/baseline-expand_less-24px.svg";
import {
  Card,
  HeaderTitle,
  HeaderCard,
  IconStyle,
  ButtonHeader,
  CardContent,
  ContentItem,
  CardFooter,
  ButtonStyle
} from "./styled";

const ContentCard = props => {
  return (
    <Card>
      <CardContent>
        <HeaderCard className="header-card" component="div">
          <HeaderTitle component="span">{props.title}</HeaderTitle>
          <ButtonHeader onClick={() => console.log("click")}>
            <IconExpandLess style={IconStyle} />
          </ButtonHeader>
        </HeaderCard>
        <ContentItem component="div">{props.children}</ContentItem>
      </CardContent>
      <Divider light />
      <CardFooter>
        <CardFooter size="small" onClick={() => console.log("click")}>
          <span style={ButtonStyle}>Edit</span>
        </CardFooter>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;

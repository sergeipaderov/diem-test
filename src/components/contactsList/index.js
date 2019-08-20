import React from "react";
import { ReactComponent as PhoneIcon } from "../../assets/icons/baseline-phone-24px.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/baseline-mail_outline-24px.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/baseline-location_on-24px.svg";

import {
  ContainerList,
  ItemList,
  IconStyle,
  IconContainer,
  TextItem
} from "./styled";

const ContactsList = props => {
  return (
    <ContainerList>
      <ItemList>
        <IconContainer>
          <PhoneIcon style={IconStyle} />
        </IconContainer>
        <div className="phones-container">
          {/* Для ускорения процесса решил обойтись без маски для номеров, т.к. это не влияет на верстку */}
          <TextItem primary={props.homePhone} secondary="Home Phone" />
          <TextItem
            primary={props.workPhone}
            secondary="Business Phone"
            style={{ marginBottom: "10px" }}
          />
        </div>
      </ItemList>
      <ItemList>
        <IconContainer>
          <MailIcon style={IconStyle} />
        </IconContainer>
        <TextItem primary={props.email} secondary="E-mail" />
      </ItemList>
      <ItemList>
        <IconContainer>
          <LocationIcon style={IconStyle} />
        </IconContainer>
        <TextItem primary={props.address} secondary="Address" />
      </ItemList>
    </ContainerList>
  );
};

export default ContactsList;

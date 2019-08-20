import React, { Component } from "react";

import ContentTabs from "../contentTabs";
import ContentCard from "../contentCard";
import EmptyCard from "../emptyCard";
import InfoItem from "../infoItem";
import SpecItem from "../specItem";
import ContactsList from "../contactsList";
import CustomButton from "../customButton";
import userPhoto from "../../assets/nurse.png";
import specializationIcon from "../../assets/nurse_bag.png";
import ampImg from "../../assets/map.png";
import { ReactComponent as ItemMarkIcon } from "../../assets/icons/baseline-lens-24px.svg";
import { profile } from "../../mock";

import "./styled.scss";

class MainContent extends Component {
  state = {
    profile,
    langauges: ["English", "Spanish"],
    specialization: ["registered nurse", "emergency room nurse"],
    systems: ["Epic", "Devero"],
    summary: `Lizards are a widespread group of squamate reptiles, with over
    6,000 species, ranging across all continents except Antarctica.
    Lizards are a widespread group of squamate reptiles, with over
    6,000 species, ranging across all continents except Antarctica.
    Lizards are a widespread group of squamate reptiles, with over
    6,000 species, ranging across all continents except Antarctica`
  };

  render() {
    const { langauges, systems, summary, specialization } = this.state;
    const {
      homePhone,
      workPhone,
      email,
      address,
      firstName,
      lastName,
      licenseExp,
      insuranceExp
    } = this.state.profile;
    return (
      <div className="main">
        <div className="tabs">
          <ContentTabs />
        </div>
        <div className="outer-container">
          <div className="container-left">
            <div className="profile-container">
              <div className="userphoto-container">
                <div className="user-photo">
                  <img src={userPhoto} alt="User" />
                </div>
              </div>
              <EmptyCard>
                <div className="specialization-block">
                  <div className="name-wrapper">
                    <span className="name">{`${firstName} ${lastName}`}</span>
                  </div>

                  <div className="prof-container">
                    <div className="specialization-image">
                      <img src={specializationIcon} alt="Specialization Icon" />
                    </div>
                    <div className="spec-wrapper">
                      {specialization.map((item, i) => (
                        <SpecItem key={i} item={item} className="spec-item" />
                      ))}
                    </div>
                  </div>
                  <CustomButton color="#21C9E7" text="message" />
                </div>
              </EmptyCard>
            </div>
            <EmptyCard>
              <div className="info-title">
                <span>alerts:</span>
              </div>
              <div className="alert-items">
                <div className="alert-item">
                  <div className="itemmark-wrapper">
                    <ItemMarkIcon />
                  </div>
                  <span className="alert-text">
                    {`CRP License expiration on`}
                  </span>
                  <span className="alert-date">{licenseExp}</span>
                </div>
                <div className="alert-item">
                  <div className="itemmark-wrapper">
                    <ItemMarkIcon />
                  </div>
                  <span className="alert-text">
                    {`Car Insurance expiration on`}
                  </span>
                  <span className="alert-date">{insuranceExp}</span>
                </div>
              </div>
            </EmptyCard>
            <EmptyCard>
              <div className="info-title">
                <span>current location:</span>
              </div>
              <div className="map-wrapper">
                <img src={ampImg} alt="Map" />
              </div>
            </EmptyCard>
          </div>
          <div component="div" className="container-right">
            <ContentCard title="Summary">
              <span>{summary}</span>
            </ContentCard>
            <ContentCard title="Contacts">
              <ContactsList
                homePhone={homePhone}
                workPhone={workPhone}
                email={email}
                address={address}
              />
            </ContentCard>
            <ContentCard title="Langauges">
              {langauges.map((item, i) => (
                <InfoItem key={i} item={item} />
              ))}
            </ContentCard>
            <ContentCard title="Systems">
              {systems.map((item, i) => (
                <InfoItem key={i} item={item} />
              ))}
            </ContentCard>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;

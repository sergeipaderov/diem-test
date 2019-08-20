import React from "react";

import { Tabs, Tab } from "./styled";

const ContentTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Profile" />
      <Tab label="Credentials" />
    </Tabs>
  );
};

export default ContentTabs;

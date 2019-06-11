import React from "react";
import {
    Icon,
    List, 
  } from "semantic-ui-react";
const HeaderItem = ({itemName}) => {
  return (
    <List.Item>
      <Icon name="check" style={{ color: "#66FCF1" }} />
      <List.Content>
        <List.Header>{itemName}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default HeaderItem;

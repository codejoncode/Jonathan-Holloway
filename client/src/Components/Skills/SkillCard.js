import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class SkillCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Meta />
          <Card.Description />
        </Card.Content>
        <Card.Content>
          <Icon />
        </Card.Content>
      </Card>
    );
  }
}

export default SkillCard;

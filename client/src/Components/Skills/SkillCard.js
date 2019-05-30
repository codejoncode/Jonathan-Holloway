import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    if (skill){
        return (
          <Card>
            <Card.Content>
              <Card.Meta />
              <Card.Description />
            </Card.Content>
            <Card.Content>
              <Icon name={skill.icon}/>
            </Card.Content>
          </Card>
        );
    } else {
       return  <div></div>
    }
  }
}

export default SkillCard;

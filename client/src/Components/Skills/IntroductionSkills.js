import React, { Component } from "react";
import { Icon, Grid } from "semantic-ui-react";
import { skillsData } from "../../Helpers/skillsData";
class IntroductionSkills extends Component {
  render() {
    return (
      <Grid columns={7} divided>
        <Grid.Row>
          {skillsData.map((skill, index) => (
            <Grid.Column key={index}>
              <Icon name={skill} size="big" />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}
export default IntroductionSkills;

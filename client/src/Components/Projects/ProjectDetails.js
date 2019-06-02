import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Button,
  Header,
  Icon,
  Image,
  Message,
  Item,
  Segment,
  Divider,
  Grid
} from "semantic-ui-react";
import ProjectFeatureList from "./ProjectFeatureList";
import GithubLinks from "./GithubLinks";
import PlanLinks from "./PlanLinks";
import DeploymentLinks from "./DeploymentLinks";

class ProjectDetails extends Component {
  state = {
    project: null
  };
  componentWillMount() {
    const { id } = this.props.match.params;
    const project = this.props.projectsDisplay.filter(
      pj => pj.id === Number(id)
    )[0];
    this.setState({ project });
  }
  render() {
    const { project } = this.state;
    return (
    <div>
    <Segment textAlign="center">
      <Item>
          <Header>{project.title}</Header>
          <Item.Description>{project.description}</Item.Description>
          <Image size="big" src={project.image} centered />
      </Item>
        </Segment>

          <Grid columns={2} stackable>
            {/* <Divider vertical></Divider> */}
            <Grid.Row>
              <Grid.Column>
        <Segment padded = 'very'>
                <Header>Features Implemented</Header>
                <ProjectFeatureList features={project.features} />
        </Segment>
              </Grid.Column>
              <Grid.Column>
        <Segment padded = 'very'>
                  <Header>Repository</Header>
                <GithubLinks links={project.githubUrl} />

                <Header>Plan</Header>
                <PlanLinks links={project.plan}/>

                <Header>Deploy</Header>
                <DeploymentLinks links = {project.deployUrl}/>

        </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>
    );
  }
}
export default withRouter(ProjectDetails);

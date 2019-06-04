import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Header,
  Image,
  Item,
  Segment,
  Grid
} from "semantic-ui-react";
import ProjectFeatureList from "./ProjectFeatureList";
import GithubLinks from "./GithubLinks";
import PlanLinks from "./PlanLinks";
import DeploymentLinks from "./DeploymentLinks";
import {darkBlack,lightBlack,grey,lighterBlue,anotherBlue } from "../../Helpers/Colors/colors";

class ProjectDetails extends Component {
  state = {
    project: null,
   
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
    <Segment textAlign="center"style = {{backgroundColor:darkBlack}}>
      <Item>
          <Header style = {{color: lighterBlue}}>{project.title}</Header>
          <Item.Description style = {{color: lighterBlue}}>{project.description}</Item.Description>
          <Image size="big" src={project.image} centered />
      </Item>
        </Segment>

          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
        <Segment padded = 'very' style = {{backgroundColor:darkBlack}}>
                <Header style = {{color: lighterBlue}}>Features Implemented</Header>
                <ProjectFeatureList features={project.features} lighterBlue ={lighterBlue}/>
        </Segment>
              </Grid.Column>
              <Grid.Column>
        <Segment padded = 'very' style = {{backgroundColor:darkBlack}}>
                <div >
                <GithubLinks links={project.githubUrl} lighterBlue ={lighterBlue}/>
                <PlanLinks links={project.plan} lighterBlue ={lighterBlue}/>
                <DeploymentLinks links = {project.deployUrl} lighterBlue ={lighterBlue}/>

                </div>

        </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>
    );
  }
}
export default withRouter(ProjectDetails);

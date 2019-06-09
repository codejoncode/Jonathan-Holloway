import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Header,
  Image,
  Item,
  Segment,
  Grid,
  Card,
  Container, 
  Message
} from "semantic-ui-react";
import ProjectFeatureList from "./ProjectFeatureList";
import GithubLinks from "./GithubLinks";
import PlanLinks from "./PlanLinks";
import DeploymentLinks from "./DeploymentLinks";
import {
  darkBlack,
  lightBlack,
  grey,
  lighterBlue,
  anotherBlue
} from "../../Helpers/Colors/colors";

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
        <Segment textAlign="center" style={{ backgroundColor: darkBlack }}>
          <Item>
            <Header style={{ color: lighterBlue }}>{project.title}</Header>
            {/* <div style = {{display : "flex", justifyContent: "center"}}>
            <p style={{ color: lighterBlue, width : "65%", textAlign: "center"}}>
              {project.description}
            </p>

            </div> */}
            <Image size="big" src={project.image} centered />
          </Item>
        </Segment>

        <Grid >
          <Grid.Row>

          <Message style={{ backgroundColor: darkBlack, padding: "40px", marginTop: "14px", boxShadow: "none"}}>
            <Header style={{ color: lighterBlue }}>Features Implemented</Header>
            <ProjectFeatureList
              features={project.features}
              lighterBlue={lighterBlue}
            />
          </Message>
          <Message style={{ backgroundColor: darkBlack, padding: "40px" , boxShadow: "none"  }}>
            <GithubLinks links={project.githubUrl} lighterBlue={lighterBlue} />
            <PlanLinks links={project.plan} lighterBlue={lighterBlue} />
            <DeploymentLinks
              links={project.deployUrl}
              lighterBlue={lighterBlue}
            />
          </Message>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default withRouter(ProjectDetails);

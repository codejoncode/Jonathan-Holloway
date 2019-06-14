import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Header, Item, Segment, Grid, Message, Container } from "semantic-ui-react";
import ProjectFeatureList from "./ProjectFeatureList";
import GithubLinks from "./GithubLinks";
import PlanLinks from "./PlanLinks";
import DeploymentLinks from "./DeploymentLinks";
import { darkBlack, lighterBlue } from "../../Helpers/Colors/colors";

import {
  fetchProjects,
  fetchOneProject
  
} from "../../Store/Actions/projectActions";

const mapState = (state) => {
  console.log(state)
 return {
  project: state.projectReducer.soloProject,
  projects: state.projectReducer.projects
};
}


const actions = {
  fetchProjects,
  fetchOneProject,
};

class ProjectDetails extends Component {
  componentWillMount() {

    const id = this.props.match.params.id; 

    this.goGetProject(id);
  }

  goGetProject = async id => {
    await this.props.fetchOneProject(id);
    await this.props.fetchProjects();
  };

  render() {
    let  { project } = this.props.location.state;
    const id = this.props.match.params.id; 
    project = project ?  project :  this.props.projects[id -1] || this.props.project;
    if (project) {
      return (
        <div>
          <Segment textAlign="center" style={{ backgroundColor: darkBlack }}>
            <Item>
              <Header style={{ color: lighterBlue }}>{project.title}</Header>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "calc(50.90% + 44px)"
                }}
              >
                <iframe
                  title={project.title}
                  src={project.gifPlay}
                  frameBorder="0"
                  scrolling="no"
                  width="100%"
                  height="100%"
                  // style={{ position: "absolute", top: "20%", left: "25%" }}
                  style = {{position: "absolute", left: "0"}}
                />
              </div>
            </Item>
          </Segment>

          <Grid>
            <Grid.Row>
              <Message
                style={{
                  backgroundColor: darkBlack,
                  padding: "40px",
                  marginTop: "14px",
                  boxShadow: "none"
                }}
              >
                <Header style={{ color: lighterBlue }}>
                  Features Implemented
                </Header>
                <ProjectFeatureList
                  features={project.features}
                  lighterBlue={lighterBlue}
                />
              </Message>
              <Message
                style={{
                  backgroundColor: darkBlack,
                  padding: "40px",
                  boxShadow: "none"
                }}
              >
                <GithubLinks
                  links={project.githubUrl}
                  lighterBlue={lighterBlue}
                />
                <PlanLinks links={project.plan} lighterBlue={lighterBlue} />
                <DeploymentLinks
                  links={project.deployUrl}
                  lighterBlue={lighterBlue}
                />
              </Message>

              <Message
                style={{
                  backgroundColor: darkBlack,
                  padding: "40px",
                  boxShadow: "none"
                }}
              >
              <Container>
                <Header style={{ color: lighterBlue }}>
                  Description
                </Header>
                <Message.Content style={{ color: lighterBlue }}>{project.description}</Message.Content>
              </Container>
              </Message>

            </Grid.Row>
          </Grid>
        </div>
      );
    }
    return <div>Loading</div>;
  }
}
export default withRouter(
  connect(
    mapState,
    actions
  )(ProjectDetails)
);

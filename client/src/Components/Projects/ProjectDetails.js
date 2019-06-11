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
  fetchProjects
} from "../../Store/Actions/projectActions";

const mapState = state => ({
  project: state.projectReducer
});

const actions = {
  fetchProjects
};

class ProjectDetails extends Component {
  componentWillMount() {
    this.goGetProject();
  }

  goGetProject = async id => {
    await this.props.fetchProjects();
  };

  render() {
    const { project } = this.props.location.state;
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
                  width="50%"
                  height="50%"
                  style={{ position: "absolute", top: "20%", left: "25%" }}
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

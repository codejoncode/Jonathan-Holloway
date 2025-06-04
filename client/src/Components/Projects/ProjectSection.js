import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  Grid,
  Image,
  Card,
  Container,
  Reveal,
  Header
} from "semantic-ui-react";

class ProjectSection extends Component {
  state = {
    style: {
      borderRadius: 0,
      opacity: 0.7,
      padding: "2em",
      color: this.props.darkBlack,
      fontWeight: 900,
      background: this.props.lighterBlue
    }
  };
  render() {
    const { projects, lighterBlue, darkBlack } = this.props;
    const { style } = this.state;
    return (
      <Grid.Row stretched>
        <br />
        {projects &&
          projects.map((project, index) => (
            <Grid.Column key={project.id}>
              <Container>
                <Card
                  as={Link}
                  to={{
                    pathname: `/project/${project.id}`,
                    state: { project: project }
                  }}
                  style={{ background: lighterBlue }}
                >
                  <Reveal animated="move down">
                    <Reveal.Content visible>
                      <Image
                        src={project.image}
                        fluid
                        style={{ height: "400px" }}
                      />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <Header style={{ color: darkBlack }} textAlign="center">
                        {project.title}
                      </Header>
                      <p style={style}>{project.description}</p>
                    </Reveal.Content>
                  </Reveal>
                </Card>
              </Container>
            </Grid.Column>
          ))}
      </Grid.Row>
    );
  }
}

export default withRouter(ProjectSection);

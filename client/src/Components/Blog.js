import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Segment,
  Header,
  Image,
  Divider,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { lighterBlue, anotherBlue } from "../Helpers/Colors/colors";
import { fetchBlogs } from "../Store/Actions/blogActions";

const mapState = state => ({
  blogs: state.blogReducer
});

const actions = {
  fetchBlogs
};

class Blog extends Component {
  state = {
    intialized: false
  };
  componentDidMount() {
    this.loadBlogs();
  }
  loadBlogs = async () => {
    await this.props.fetchBlogs();
    this.setState({ intialized: true });
  };

  render() {
    if (!this.state.intialized) {
      return (
        <div>
          <Segment>
            <Dimmer active>
              <Loader indeterminate>Loading Blogs</Loader>
            </Dimmer>
          </Segment>
        </div>
      );
    }
    return (
      <Container fluid>
        {this.props.blogs &&
          this.props.blogs.map(blog => (
            <div key={blog.id}>
              <Header textAlign="center">
                <Header.Content style={{ color: lighterBlue }}>
                  {blog.title}
                </Header.Content>
              </Header>
              <Segment inverted style={{ border: `1px solid ${anotherBlue}` }}>
                <Image src={blog.image} centered size="medium" />
                <br />
                {blog &&
                  blog.message.split("...").map((paragraph, index) => (
                    <p
                      style={{ color: lighterBlue, fontSize: "2vw" }}
                      key={index}
                    >
                      {paragraph}
                    </p>
                  ))}
              </Segment>
              <Divider style={{ background: anotherBlue }} />
              <br />
            </div>
          ))}
      </Container>
    );
  }
}
export default connect(
  mapState,
  actions
)(Blog);

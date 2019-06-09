import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'; 
import { fetchBlogs } from "../../Store/Actions/blogActions";
import {
  Form,
  Button,
  Grid,
  Container,
  Input,
  Header,
  List,
  Divider
} from "semantic-ui-react";
import {
  lighterBlue,
  darkBlack,
  anotherBlue
} from "../../Helpers/Colors/colors";
const actions = {
  fetchBlogs
};

const mapState = state => ({
  blogs: state.blogReducer
});

class DisplayBlogs extends Component {
  componentDidMount() {
    const token = localStorage.getItem("holloway-portfolio-token");
    if (!token) {
      this.props.history.push("/admin/login");
    } else {
      this.props.fetchBlogs(token);
    }
  }


  render() {
    const { blogs } = this.props;
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Header
                as={"h1"}
                style={{ color: lighterBlue }}
                textAlign="center"
              >
                Blogs will be displayed here only after successful login
              </Header>
              <Button as={Link} to= "/create" style={{ background: lighterBlue, color: darkBlack }}>
                Add New Blog
              </Button>
              <Divider style={{ backgroundColor: anotherBlue }} />
              <List>
                {blogs &&
                  blogs.map(blog => (
                    <List.Item
                      as={Link}
                      to = {`/admin/blog/${blog.id}`}
                      key={blog.id}
                      style={{ color: lighterBlue, cursor: "pointer" }}
                    >
                      <List.Icon name="write square" />
                      <List.Content style={{ color: lighterBlue }}>
                        <List.Header style={{ color: lighterBlue }}>
                          {blog.title}
                        </List.Header>
                        <List.Description style={{ color: lighterBlue }}>
                          {blog.message.slice(0, 25)}
                        </List.Description>
                      </List.Content>
                      <Divider style={{ backgroundColor: anotherBlue }} />
                    </List.Item>
                  ))}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  mapState,
  actions
)(DisplayBlogs);

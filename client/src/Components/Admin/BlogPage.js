import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  Grid,
  Container,
  Input,
  Header,
  List,
  Divider,
  TextArea
} from "semantic-ui-react";
import {
  lighterBlue,
  darkBlack,
  anotherBlue
} from "../../Helpers/Colors/colors";
import {fetchOneBlog} from "../../Store/Actions/blogActions";

const actions = {
    fetchOneBlog,
};

const mapState = state => ({
    blog: state.blogReducer,
});
class BlogPage extends Component {
  state = {
    title: "",
    message: "",
    blogSelected: false,
    grabbed: false,
  };

  componentDidMount() {
      if (this.props.match.params.id !== undefined){
          this.blogSelected();  
      }

  }

  componentDidUpdate (prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id){
        this.blogSelected() 
    }
    
    if( this.state.grabbed === false && this.props.blog && this.props.blog.length){
        const {title, message} = this.props.blog[0];
        this.setState({title, message, grabbed: true})

    }
  }


  blogSelected = async () => {
    await this.props.fetchOneBlog(this.props.match.params.id);
    console.log(this.props);
    // const {title, message} = this.p; 
    this.setState({blogSelected: true});
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

 
  createNewPost = () => {

  }

  editBlogPost = () => {

  }

  deleteBlogPost = () => {
     
  }

  render() {
    const { title, message, blogSelected } = this.state;
    console.log(this.props)
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
                {/* so if blogSelected is true then editing the post if it is false then it is a new post */}
                <Button as={Link} to="/admin/blogs">Go Back to list of blogs</Button>
              <Form inverted onSubmit = {blogSelected ? this.editBlogPost : this.createNewPost}>
                <Form.Field
                  required
                  placeholder="Title"
                  label="Title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  control={Input}
                />
                <Form.Field
                  style = {{height: "60%"}}
                  required
                  placeholder="Enter your body here..."
                  label="Content"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  control={TextArea}
                />
                {/* so if blogSelected is true then editing the post if it is false then it is a new post */}
                { blogSelected ? <Button>Edit Blog Post</Button> : <Button>Create Blog Post</Button> }
                
                

              </Form>
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
)(BlogPage);

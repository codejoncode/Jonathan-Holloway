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
import {fetchOneBlog, editBlog, deleteBlog,postBlog} from "../../Store/Actions/blogActions";

const actions = {
    fetchOneBlog,
    editBlog,
    deleteBlog,
    postBlog
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
      console.log(this.props);
      if (this.props.match.params.id !== undefined && this.props.match.path !== '/create'){
          this.blogSelected();  
      }

  }

  componentDidUpdate (prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id && this.props.match.params.id && this.props.match.path !== '/create'){
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

 
  createNewPost = async () => {
      const {title, message} = this.state;
      const token = localStorage.getItem("holloway-portfolio-token"); 
      const body = { title, message};
      await this.props.postBlog(token, body);
      this.props.history.push("/admin/blogs")


  }

  editBlogPost = async () => {
    const {title, message} = this.state; 
    const token = localStorage.getItem("holloway-portfolio-token");
    const {id} = this.props.match.params; 

    //original message 
    const blog = this.props.blog[0];
    //make sure they are different than wahts already on the blog and // make sure token is a thing 
    if(((blog.title !== title) || (blog.message !== message)) && token){
        const body = {title, message};
        await this.props.editBlog(id, token, body);
        this.props.history.push("/admin/blogs");
    }
  }

  deleteBlogPost = async () => {
    const token = localStorage.getItem("holloway-portfolio-token");
    const {id} = this.props.match.params; 
    await this.props.deleteBlog(token, id); 
  }

  render() {
    const { title, message, blogSelected } = this.state;
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
                {/* so if blogSelected is true then editing the post if it is false then it is a new post */}
                <Button style={{ background: lighterBlue, color: darkBlack }} as={Link} to="/admin/blogs">Go Back to list of blogs</Button>
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
                { blogSelected ? <Button style={{ background: lighterBlue, color: darkBlack }} type = 'submit'>Edit Blog Post</Button> : <Button style={{ background: lighterBlue, color: darkBlack }} type = 'submit'>Create Blog Post</Button> }
                
                

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

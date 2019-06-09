import React, { Component } from "react";
import { connect } from "react-redux";

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

const actions = {};

const mapState = {};
class BlogPage extends Component {
  state = {
    title: "",
    message: "",
    blogSelected: false, 
  };

  componentDidMount() {
      console.log(this.props);
      if (this.props.match.params.id){
          //go get the solo blog  
      }

  }

  componentDidUpdate (prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id){

    }
  }

  blogSelected = async () => {
    //   await action 
    //setState blogSelected to true 
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { title, message } = this.state;
  };

  render() {
    const { title, message } = this.state;
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Form inverted>
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
                  required
                  placeholder="Enter your body here..."
                  label="Content"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  control={Input}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(BlogPage);

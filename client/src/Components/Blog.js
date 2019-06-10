import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";
import {lighterBlue} from "../Helpers/Colors/colors";
import { fetchBlogs } from "../Store/Actions/blogActions";

const mapState = state => ({
    blogs: state.blogReducer
})

const actions = {
    fetchBlogs
}

class Blog extends Component {
    componentDidMount() {
        this.props.fetchBlogs()

    }
    render() {
        return (
            <Container fluid>
                {this.props.blogs && this.props.blogs.map(blog => 
                    <div>
                        <Header textAlign = "center">
                            <Header.Content style ={{color: lighterBlue}}>Title goes here</Header.Content>
                        </Header>
                                  <Segment>
                                    <Image src ={blog.image} centered size="medium"/>
                                    <br/>
                                    {blog && blog.message.split("...").map((paragraph, index) => 
                                        <p>{paragraph}</p>
                                    )}
        
                                  </Segment>
                                  <br/>

                    </div>
                )}

                  
                


            </Container>
        )
    }
}
export default  connect(mapState, actions)(Blog);
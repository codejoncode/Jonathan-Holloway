import React, { Component } from 'react'
import { Container } from "semantic-ui-react";
import ReactPlayer from "react-player";
import GoogleDocsViewer from "react-google-docs-viewer";
class Blog extends Component {
    render() {
        return (
            <Container>
                <GoogleDocsViewer 
                width= "75%"
                height = "auto"
                fileUrl = "https://docs.google.com/document/d/1Rz-OrWrxOktBhrqwODgi6uVOBsaDo4uvhOPABkmxSRY/edit?usp=sharing"
                
                />
                <ReactPlayer 
                 url = "https://docs.google.com/document/d/1Rz-OrWrxOktBhrqwODgi6uVOBsaDo4uvhOPABkmxSRY/edit?usp=sharing"
                 width = "100%"
                />


            </Container>
        )
    }
}
export default  Blog;
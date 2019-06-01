import React, { Component } from 'react'
import { Grid, Image, Message } from "semantic-ui-react";
import ProjectFeatureList from './ProjectFeatureList';

class ProjectSection extends Component {
    render() {
        const {projects} = this.props; 
        return (
            
            <Grid.Row>
                {projects && 
                    projects.map((project, index) => <Grid.Column key = {index}>
                        <Image src = {project.image} fluid style = {{height: "200px"}}/>
                        <Message header ={project.title} content = {project.description}/>
                        <Message>
                            <Message.Header>Features</Message.Header>
                            
                            {project.features &&  
                                <Message.List>
                                    <ProjectFeatureList features = {project.features} />
                                </Message.List> }
                            
                            
                        </Message>
                    </Grid.Column>)
                }
            </Grid.Row>    
            
        )
    }
}

export default ProjectSection;

import React, { Component } from 'react'
import { Grid, Image, Tab } from "semantic-ui-react";

class ProjectSection extends Component {
    render() {
        const {projects} = this.props;
        const { } = projects;  
        return (
            
            <Grid.Row>
                {projects && 
                    projects.map((project, index) => <Grid.Column key = {index}>
                        <Image src = {project.image} fluid style = {{height: "50%"}}/>
                    </Grid.Column>)
                }
            </Grid.Row>    
            
        )
    }
}

export default ProjectSection;

import React from 'react'
import { Grid, Image, Message } from "semantic-ui-react";
const ProjectFeatureList = ({features}) => {
    const featuresList = features.split(',')
    if(featuresList){
        return featuresList.map((feature, index) => <Message.Item key = {index}>{feature}</Message.Item>)
    }
            
    
}

export default ProjectFeatureList

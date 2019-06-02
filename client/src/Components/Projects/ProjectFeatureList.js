import React from 'react'
import {Message } from "semantic-ui-react";
const ProjectFeatureList = ({features}) => {
    const featuresList = features ? features.split(',') : []
    if(featuresList){
        return featuresList.map((feature, index) => <Message.Item key = {index}>{feature}</Message.Item>)
    }
            
    
}

export default ProjectFeatureList

import React from 'react'
// import { Link } from "react-router-dom";
import {Item, Header,List,} from "semantic-ui-react";
const PlanLinks = ({links, lighterBlue}) => {
    let urls = []; 
    if(links){
      urls  = links.split(",")
    }
    if (urls.length > 0){
        return (
            <Item style = {{marginBottom: "20px"}}>
                <Header style = {{color: lighterBlue}}>Plan</Header>
                <List>
                {urls.map((url, index) => <List.Item key = {index}><a href ={url} target="_blank" rel="noopener noreferrer">{url}</a></List.Item>)}
                </List>
            </Item>
        )
    } else {
        return <div></div>
    }
}

export default PlanLinks

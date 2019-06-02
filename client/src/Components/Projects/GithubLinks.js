import React from 'react'
// import { Link } from "react-router-dom";
import { Item, List, Header} from "semantic-ui-react";
const GithubLinks = ({links}) => {
    let urls = []; 
    if(links){
      urls  = links.split(",")
    }
    return (
        <Item style = {{marginBottom: "20px"}}>
            <Header>Repository</Header>
            <List>
            {urls.map((url, index) => <List.Item key = {index}><a href ={url} target="_blank" rel="noopener noreferrer">{url}</a></List.Item>)}
            </List>
        </Item>

    )
}

export default GithubLinks

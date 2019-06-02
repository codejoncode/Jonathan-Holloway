import React from 'react'
import { Link } from "react-router-dom";
import { Segment, Message, Item} from "semantic-ui-react";
const GithubLinks = ({links}) => {
    let urls = []; 
    if(links){
      urls  = links.split(",")
    }
    console.log(urls)
    return (
        urls.map((url, index) => <Item key = {index}><a href ={url} target="_blank">{url}</a></Item>)
    )
}

export default GithubLinks

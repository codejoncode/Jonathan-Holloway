import React from "react";
import { Item, Header, List } from "semantic-ui-react";

const DeploymentLinks = ({ links, lighterBlue }) => {
  let urls = [];
  if (links) {
    urls = links.split(",");
  }
  return (
    <Item style={{ marginBottom: "20px" }}>
      <Header style={{ color: lighterBlue }}>Deployment</Header>
      <List>
        {urls.map((url, index) => (
          <List.Item key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </List.Item>
        ))}
      </List>
    </Item>
  );
};

export default DeploymentLinks;

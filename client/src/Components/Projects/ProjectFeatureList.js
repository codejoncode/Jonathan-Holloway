import React from "react";
import { Icon, List } from "semantic-ui-react";

const ProjectFeatureList = ({ features }) => {
  const featuresList = features ? features.split(",") : [];
  if (featuresList) {
    return (
      <List>
        {featuresList.map((feature, index) => (
          <List.Item key={index}>
            <Icon name="check" style={{ color: "#66FCF1" }} />
            <List.Content>
              <List.Header style={{ color: "#66FCF1" }}>{feature}</List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
};

export default ProjectFeatureList;

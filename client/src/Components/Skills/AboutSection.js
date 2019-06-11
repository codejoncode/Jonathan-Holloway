import React, { Component } from "react";
import { aboutSkills } from "../../Helpers/skillsData";
import SkillCard from "./SkillCard";

 class AboutSection extends Component {
  render() {
    return (
      <div>
        {aboutSkills.map((skill, index) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </div>
    );
  }
}
export default AboutSection;
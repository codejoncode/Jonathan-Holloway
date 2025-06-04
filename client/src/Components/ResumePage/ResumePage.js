import React, { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import HomePageHeader from "../Header/HomePageHeader";
import {
  darkBlack,
  lighterBlue,
  anotherBlue
} from "../../Helpers/Colors/colors";

class ResumePage extends Component {
  state = {
    width: 0,
    height: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  exportPDF = () => {
    this.resume.save();
  };

  render() {
    if (this.state.width < 647) {
      return (
        <div className="pdfButtonDiv" style={{ flexDirection: "column" }}>
          <div>
            <h1 style={{ color: lighterBlue }}>Resume (Before Professional Coding experience)</h1>
          </div>
          <br />
          <button
            className="pdfButton"
            style={{
              width: "40%",
              backgroundColor: darkBlack,
              color: anotherBlue
            }}
            onClick={this.exportPDF}
          >
            Download Resume
          </button>
        </div>
      );
    }
    return (
      <div>
        <HomePageHeader />

        <div className="resume">
          <div className="pdfButtonDiv">
            <h1>Resume</h1>
          </div>
          <div style={{ marginTop: "25px" }}>
            <PDFExport
              fileName="Jonathan-Holloway-Resume.pdf"
              title="Jonathan J. Holloway"
              subject="Software Engineer Resume"
              keywords=""
              ref={r => (this.resume = r)}
            >
              {/* First column */}
              <div
                className="pdfDiv"
                style={{
                  height: 792,
                  width: 612,
                  padding: "none",
                  backgroundColor: "white",
                  boxShadow: "5px 5px 5px black",
                  margin: "auto",
                  overflowX: "hidden",
                  overflowY: "hidden"
                }}
              >
                <div className="column1">
                  <h1>Jonathan J. Holloway</h1>
                  <h2>Softwarer Engineer</h2>
                  <h3>Contact</h3>
                  <a
                    href="https://jonathanjholloway.netlify.app/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Profolio Web App
                  </a>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/jonathanjholloway/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>LinkedIn</strong>
                  </a>
                  <br />
                  <a
                    href="https://github.com/codejoncode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Github</strong>
                  </a>
                  <br />

                  <p>jonathanjamelholloway@gmail.com</p>
                  <p>Crown Point, IN, USA</p>
                  <h3>TECHNICAL SKILLS</h3>
                  <ul>
                    <li>CSS/LESS</li>
                    <li>HTML5</li>
                    <li>JAVASCRIPT</li>
                    <li>PYTHON</li>
                    <li>SQL</li>
                    <li>POSTGRESQL</li>
                    <li>C</li>
                    <li>NODE</li>
                    <li>REST API</li>
                    <li>EXPRESS</li>
                    <li>REACT/REDUX</li>
                    <li>DJANGO</li>
                    <li>STYLED COMPONENTS</li>
                    <li>FIREBASE</li>
                    <li>GOOGLE CLOUD FUNCTIONS</li>
                    <li>SEMANTIC UI</li>
                    <li>Git based source control</li>
                    <li>Mocha</li>
                  </ul>
                  <h3>EDUCATION</h3>
                  <h5>
                    <a
                      href="https://www.youracclaim.com/earner/earned/badge/df5c64f6-82d2-4553-bb12-f9b7e3878d3c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lambda School Academy of Computer Science and Web
                      Development June 2018 to April 2019 click to view more.
                    </a>
                  </h5>
                  <p>
                    Computer Science & Software Engineering academy providing
                    immersive hands-on curriculum with a focus on computer
                    science and web development.
                  </p>
                  <ul>
                    <li>
                      Utilized agile software development and Git workflow on
                      all projects.
                    </li>
                    <li>Hands on experience with client and server testing.</li>
                    <li>Test Driven Development</li>
                    <li>Building and Integrating RESTFUL API’s</li>
                  </ul>
                </div>
                {/* Second column  */}
                <div className="column2">
                  <h3>PROJECTS</h3>
                  <p>
                    <span style={{ textDecoration: "underline" }}>
                      <strong style={{ fontWeight: "bold" }}>
                        {" "}
                        <a
                          href="https://the-events-app.firebaseapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Events App
                        </a>{" "}
                      </strong>
                    </span>{" "}
                    <span>-</span>
                    <span style={{ textDecoration: "underline" }}>
                      Plan board
                    </span>
                    {"  "}
                    Technologies: React | Redux | Redux Forms | Semantic UI |
                    Firebase | Google Cloud Functions (
                    <span style={{ fontWeight: "bold" }}>solo work</span>)
                  </p>
                  <ul>
                    <li>
                      Social Media type application allow users to create or
                      join events.
                    </li>
                    <li>
                      Features a serverless backend(firebase) React/Redux
                      frontend{" "}
                    </li>
                    <li>Google maps / Google places</li>
                    <li>
                      Google cloud functions to implement CRUD base operations
                      on events.{" "}
                    </li>
                    <li>Semantic UI for product UI UX </li>
                  </ul>
                  <p>
                    <span style={{ textDecoration: "underline" }}>
                      <strong style={{ fontWeight: "bold" }}>
                        {" "}
                        <a
                          href="https://socialapp2.netlify.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Symposium
                        </a>{" "}
                      </strong>
                    </span>{" "}
                    <span>
                      Plan board <span>(private)</span>
                    </span>{" "}
                    Technologies: React | Redux | Redux Forms | Pusher JS |
                    PostgreSQL | Node | Express | sign in = (jonathan,
                    jonathan))
                  </p>
                  <ul>
                    <li>
                      5-week project where I worked with{" "}
                      <strong>4 other developers</strong> on an existing
                      codebase to add functionalty and features.
                    </li>
                    <li>
                      Continuous deployment, test driven development and git
                      workflow
                    </li>
                    <li>
                      React/Redux frontend and PostgreSQL on the backend.{" "}
                    </li>
                    <li>
                      I implemented the backend and frontend for the follow a
                      user feature. I also implemented the functionalty for
                      editing a profile.{" "}
                    </li>
                  </ul>
                  <p>
                    <span style={{ textDecoration: "underline" }}>
                      <strong style={{ fontWeight: "bold" }}>
                        {" "}
                        <a
                          href="https://notetakingapp.netlify.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Note App
                        </a>{" "}
                      </strong>
                    </span>{" "}
                    <span>-</span>
                    <span style={{ textDecoration: "underline" }}>
                      <a
                        href="https://trello.com/b/PZTzDkkd/lambda-notes-jonathan-jamel-holloway"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Plan Board FE
                      </a>{" "}
                      <span>-</span>
                      <a
                        href="https://trello.com/b/bXgHQV3W/lambda-notesbackend-jonathan-jamel-holloway"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Plan Board BE
                      </a>
                    </span>
                    {"  "}
                    Technologies: React | Redux | Node JS | Express | CSS 3D (
                    <span style={{ fontWeight: "bold" }}>solo work</span>)
                  </p>

                  <h3>EXPERIENCE</h3>
                  <h3 as="h3">
                    Lambda School of Computer Science January 2019 to March 2019
                    - Teaching Assistant
                  </h3>
                  <ul>
                    <li>
                      I perform live guided demos to assist with learning the
                      computer science material which consisted of data
                      structures and algorithms, Python, and the C programming
                      language. The largest group featured 17 students. I also
                      conduct code reviews and assist students with their
                      assignments and projects from debugging to providing
                      feedback on best practices.{" "}
                      <a
                        href="https://codejoncode.github.io/hashtable-guided-project-app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://codejoncode.github.io/hashtable-guided-project-app/
                      </a>{" "}
                      is a react application I built to help discus hash tables.{" "}
                    </li>
                    <li>Accepted a role as Team Lead April 2019 to current.</li>
                    <li>
                      Involves assisting teams of up to 8 developers assisting
                      with merges conducting meetings and analyzing PR’s align
                      with the project objectives and all deadlines are met.
                    </li>
                  </ul>
                </div>
              </div>
            </PDFExport>
          </div>
          <div className="pdfButtonDiv">
            <button
              className="pdfButton"
              onClick={this.exportPDF}
              style={{ backgroundColor: darkBlack, color: anotherBlue }}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ResumePage;

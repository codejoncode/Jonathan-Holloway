import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PDFExport } from "@progress/kendo-react-pdf";
import Resume from "./Resume";

class ResumePage extends Component {
  exportPDF = () => {
    this.resume.save();
  };
  render() {
    return (
      <div>
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
                  href="https://www.linkedin.com/in/jonathanjholloway/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/jonathanjholloway/
                </a>
                <br />
                <a href="https://github.com/codejoncode">
                  https://github.com/codejoncode
                </a>
                <br />
                <a href="www.jonathanjholloway.com">
                  www.jonathanjholloway.com
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
                </ul>
                <h3>EDUCATION</h3>
                <h5>
                  Lambda School Academy of Computer Science and Web Development
                  June 2018 to April 2019.
                </h5>
                <p>
                  Computer Science & Software Engineering academy providing
                  immersive hands-on curriculum with a focus on computer science
                  and web development.
                </p>
                <ul>
                  <li>
                    Utilized agile software development and Git workflow on all
                    projects.
                  </li>
                  <li>Hands on experience with client and server testing.</li>
                  <li>Test Driven Development</li>
                  <li>Building and Integrating RESTFUL API’s</li>
                </ul>
              </div>
              {/* Second column  */}
              <div className="column2">
                <h3>SUMMARY</h3>
                <p>
                  Team player software engineer with a can-do attitude,
                  phenomenal time management skills and a strong user focus. An
                  Experienced developer working with others on one part of an
                  application and another team working on a different part of an
                  application.{" "}
                </p>
                <h3>PROJECTS</h3>
                <h4>
                  Symposium -{" "}
                  <Link to="https://socialapp2.netlify.com/">
                    https://socialapp2.netlify.com/
                  </Link>
                </h4>
                <p>
                  Symposium is a reddit/slack like forum where likeminded users
                  can share ideas.{" "}
                </p>
                <h4>Lambda Treasure Hunt - </h4> <span />
                <p>
                  A treasure hunt game showcasing the ability to find the
                  shortest path using breadth first search.
                </p>
                <h4>Note App - </h4> <span />
                <p>
                  A tool for creating notes, saving notes and inspiring
                  creativity.{" "}
                </p>
                <h4>Conway's Life</h4> <span />
                <p>Conway’s game of life – cellular automation.</p>
                <h3>EXPERIENCE</h3>
                <h4>Symposium- March 2019 - April 2019</h4>
                <ul>
                  <li>
                    5-week project where I worked with 4 other developers on an
                    existing codebase to add functionalty and features.
                  </li>
                  <li>
                    Continuous deployment, test driven development and git
                    workflow
                  </li>
                  <li>React/Redux frontend and PostgreSQL on the backend. </li>
                  <li>
                    I implemented the backend and frontend for the follow a user
                    feature. I also implemented the functionalty for editing a
                    profile.{" "}
                  </li>
                </ul>
                <h3 as="h3" />
                <h3 as="h3">
                  Lambda School of Computer Science January 2019 to March 2019 -
                  Teaching Assistant
                </h3>
                <ul>
                  <li>
                    I perform live guided demos to assist with learning the
                    computer science material which consisted of data structures
                    and algorithms, Python, and the C programming language. The
                    largest group featured 17 students. I also conduct code
                    reviews and assist students with their assignments and
                    projects from debugging to providing feedback on best
                    practices.{" "}
                    <a
                      href="https://codejoncode.github.io/hashtable-guided-project-app/"
                      target="_blank"
                    >
                      https://codejoncode.github.io/hashtable-guided-project-app/
                    </a>{" "}
                    is a react application I built to help discus hash tables.{" "}
                  </li>
                  <li>
                    Accepted a role as Project Manager April 2019 to current.
                  </li>
                </ul>
              </div>
            </div>
          </PDFExport>
        </div>
         <div className="pdfButtonDiv">
         <button  className="pdfButton" onClick={this.exportPDF}>
            download
          </button>
         </div> 
        
      </div>
    );
  }
}
export default ResumePage;

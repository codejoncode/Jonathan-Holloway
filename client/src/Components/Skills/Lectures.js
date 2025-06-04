import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Label } from "semantic-ui-react";
import ReactPlayer from "react-player";
import { fetchLectures } from "../../Store/Actions/lecturesActions";
import {
  lighterBlue,
  anotherBlue,
  darkBlack
} from "../../Helpers/Colors/colors";

const mapState = state => ({
  lectures: state.lecturesReducer
});

const actions = {
  fetchLectures
};

const lecturesHardCoded = [
    { id: "2o3p4q5", url: "https://www.youtube.com/embed/lxuyCxw_sg4", title : "Web Server Guided Project I" },
    { id: "w6v5u4t3s", url: "https://www.youtube.com/embed/KWKR4tXLqW8", title: "Web Server Guided Project II" },
    { id: "v8w7x6y5", url: "https://www.youtube.com/embed/otxoIXgr6Tk", title: "Web Server Guided Project III" },
    { id: "1t2u3v4w5", url: "https://www.youtube.com/embed/UH6QHhxB3TQ", title: "Web Server Guided Project IV" },
    { id: "f9g8h7i6j5k4", url: "https://youtube.com/embed/0hxTxisL6oo", title: "CS14 After Hours Algorithms"},
  ];


class Lectures extends Component {
  state = {
    url: null,
    title: null,
    initialized: false
  };
  componentDidMount() {
    this.props.fetchLectures();
  }
  componentDidUpdate() {
    let url = null;
    let title = null;
    if (this.props.lectures.length && this.state.initialized === false) {
      url = this.props.lectures[0].url;
      title = this.props.lectures[0].title;
      this.setState({ url, title, initialized: true });
    }
  }

  changeURL = (url, title) => () => {
    this.setState({ url, title });
  };
  render() {
    const lectures = this.props.lectures.length ? this.props.lectures : lecturesHardCoded;
    const { url, title } = this.state;

    return (
      <Container>
        <div className="lectures">
          {/* first column */}
          <div style={{ color: lighterBlue }}>
            <p>
              Here is my last week of lectures from when I was a teachers
              assistant at Lambda School Academy of Computer Science. This
              experience allowed me to dive deeper into the concepts.
            </p>
            <Label
              style={{
                background: darkBlack,
                border: `1px solid ${lighterBlue}`,
                color: anotherBlue
              }}
            >
              Click a title below to go to video
            </Label>
            <ul>
              {lectures.map((lecture, index) => (
                <li
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={this.changeURL(lecture.url, lecture.title)}
                  key={lecture.id}
                >
                  <h3>{lecture.title}</h3>
                </li>
              ))}
            </ul>
            <h5>
              One of the most effective ways to learn how to code can come from
              teaching others how to code.{" "}
            </h5>
            <ul>
              <li>
                <h3>Increases confidence</h3>
              </li>
              <li>
                <h3>Practice soft skills</h3>
              </li>
              <li>
                <h3>Key to mastery</h3>
              </li>
            </ul>
          </div>
          {/* second column */}

          <div>
            <h2 style={{ textAlign: "center", color: lighterBlue }}>{title}</h2>
            <ReactPlayer url={url} width="100%" />
          </div>
        </div>
      </Container>
    );
  }
}
export default connect(
  mapState,
  actions
)(Lectures);

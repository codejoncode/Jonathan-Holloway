import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Label } from "semantic-ui-react";
import ReactPlayer from "react-player";
import { fetchLectures } from "../../Store/Actions/lecturesActions";
import {
  lighterBlue,
  grey,
  anotherBlue,
  darkBlack
} from "../../Helpers/Colors/colors";

const mapState = state => ({
  lectures: state.lecturesReducer
});

const actions = {
  fetchLectures
};

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
    const lectures = this.props.lectures.length ? this.props.lectures : [];
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
                  key={index}
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

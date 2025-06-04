import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Segment,
  Header,
  Image,
  Divider,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { lighterBlue, anotherBlue } from "../Helpers/Colors/colors";
import { fetchBlogs } from "../Store/Actions/blogActions";

const blogsHardCoded = [
    {
      title: "Software Developer Journey",
      message:
        "Anyone who has ever desired to become a software engineer or developer in general probably had exciting thoughts running through their heads.  If they would create the next big thing. What is the next big thing?  Also probably running through their minds what do they need to learn in order to be a part of the growth of technology. ... I believe the last thought is the most important and I would add I agree with anyone that believes that even while learning creativity and imagination is vital development. So perhaps the thoughts equal. Nevertheless, I had to figure out how I would learn how to do the things necessary for the ideas running in my head. ... My journey started at codecademy.com where I took and still take several courses for about 5 years now. I did some HTML, some JavaScript then I did some Python. I fell I love with python and immediately started using it to analyze stock and forex data. I built several indicators out and a stock screener back when yahoo’s API up and running. Once the API went down and I must mention this I am not sure if knew I was interacting with an API until I joined Lambda School but more on them later. ... I ran out of data to analyze for free at least, as I mostly would study indicator formula’s and try to code them up to add to my screener. I would use lottery data to analyze and practice coding. It was then I probably grew a love for analyzing data and trying to solve a problem. Though the problem is of greater difficulty than financial data I feel my analyzing of lottery data allowed me to be more creative and create my own “indicators”.  I generally would code after work which meant I didn’t’ code very consistently because after an 8 hour shift of loading and unloading trucks or  talking to angry customers or selling to customers, or cleaning up at a hotel (various jobs I have performed) you tend to not have much energy left if you have given it your all.  I would code 4 hours a night some days or 1 hour and some days zero hours were put in.  ... Though I did see some progress, for example, I have a Python script for analyzing the pick 3 lottery box skips that which ended up being a 2000-line file.  It was one of my first scripts. I took the codecademy.com course on Python and though they taught dictionaries and other methods I kind of only got out of it if and elif and else statements. So, the 2000 lines of code feature an elif for every one of the 220 boxes along with instructions on how to handle if it triggered. It was my third time going through the Python course on codecademy.com before I let the power of dictionaries sink in and I proudly reduced the code significantly to about 20 lines of code once I also used a for loop to create the boxes and stead of typing it out by hand. The one good thing I think from it was I was willing to do the work even if had I been a better coder, I would have had less work to do.  However, I think that this has helped me being willing to do the work and learn away and of course, adjust. ... About a year ago almost to the day of this blog, I l found Lambda School.  I wasn’t sure what to make of it but I knew that I wasn’t learning nearly enough because all of my data was a few graphs and text data outputting the name of a stock, or some pair, etc. I would admit even though I had gone through headaches of trying to solve a problem or fix a bug for days at a time I had some doubt in myself because of these headaches. Lambda offered a free intro course and I decided I should take and attend it to see if I measured up prior to signing up for the school. I immediately remembered the JavaScript course I took at codecademy.com and decided after about 4 years I didn’t remember any of it considering I only took that course the once and I should probably brush up on my knowledge before taking the free course.   I followed the codecademy.com course up with Lambda’s free intro course and I enjoyed it. Most importantly it wasn’t so bad I was solving many of the challenges and following along with the lectures nicely. It came down to taking a Challenge to be enrolled in the school. I was nervous but I ended up passing and answering all the questions correctly.  I felt proud and it was probably then I was all in for Lambda School. ... What I liked about it was the fact they had a curriculum that I could follow and meet deadlines and accomplish goals. I hadn’t had a plan like this. I was just randomly saying I’ll work on this tonight and so I probably worked on things longer than I had to. In which because of this I felt Lambda didn’t stay on a topic long enough but, I would soon learn that It was all sticking and we probably on 75% of the material spent the right amount of time on the topic. ...The topics I felt I needed more time on, I decided to put in extra hours on codecademy.com they have two react courses, they also have a node JS express course and data structures and algorithms and unit testing courses, all topics Lambda covers.  I made it a habit of either taking the codecademy.com course the weekend before we learned the topic at Lambda or the following weekend, we learned at Lambda sometimes both. I took the React course a couple of times along with Python about 5 times now (repeated it once Lambda covered it again). I have also taken dataCamp.com courses to further my Python knowledge and Tyler McGinnis React, Redux and React Router courses and a handful of Udemy courses. ... Outside of codecademy.com I hadn’t really researched these other places before Lambda School but with interacting with others I learned of other resources available and when I found something, I thought could help create good habits with what Lambda was teaching I signed up and took the course. Many long days and weekends but I felt it all was working. I was passing Lambda’s Sprint Challenges and progressing through the course. I even became a teaching assistant and a project manager (current role). ... I have completed my studies at Lambda, and I am now looking for work but this journey has not been without stress or difficulty one of the reasons why I added to the workload that Lambda has in which is a lot but I am a repetitious learner.  If I can get the time and experience with a certain technology, I feel I can master it. Knowing this about myself I went all in on the topics so that I could fulfill every goal. In which each week it was to pass the Sprint Challenge (weekly tests at Lambda). Of course, the goal is to land a job and for that, I will keep everyone posted. ",
      image: "https://i.ibb.co/JypnmQZ/landing1.jpg"
      }
];

const mapState = state => ({
  blogs: state.blogReducer.length ? state.blogReducer : blogsHardCoded
});

const actions = {
  fetchBlogs
};

class Blog extends Component {
  state = {
    intialized: false
  };
  componentDidMount() {
    this.loadBlogs();
  }
  loadBlogs = async () => {
    await this.props.fetchBlogs();
    this.setState({ intialized: true });
  };

  render() {
    if (!this.state.intialized) {
      return (
        <div>
          <Segment>
            <Dimmer active>
              <Loader indeterminate>Loading Blogs</Loader>
            </Dimmer>
          </Segment>
        </div>
      );
    }
    return (
      <Container fluid>
        {this.props.blogs &&
          this.props.blogs.map(blog => (
            <div key={blog.id}>
              <Header textAlign="center">
                <Header.Content style={{ color: lighterBlue }}>
                  {blog.title}
                </Header.Content>
              </Header>
              <Segment inverted style={{ border: `1px solid ${anotherBlue}` }}>
                <Image src={blog.image} centered size="medium" />
                <br />
                {blog &&
                  blog.message.split("...").map((paragraph, index) => (
                    <p
                      style={{ color: lighterBlue, fontSize: "2vw" }}
                      key={index}
                    >
                      {paragraph}
                    </p>
                  ))}
              </Segment>
              <Divider style={{ background: anotherBlue }} />
              <br />
            </div>
          ))}
      </Container>
    );
  }
}
export default connect(
  mapState,
  actions
)(Blog);

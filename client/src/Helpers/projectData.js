import uiDesign from "../Images/ui design.PNG";
import basketBallLeague from "../Images/basketballLeague.PNG";
import lambdaTimes from "../Images/lambdaTimes.PNG";
import ReactWars from "../Images/reactWars.PNG";
import socialCard from "../Images/socialCard.PNG";
import calculatorComponents from "../Images/calculatorComponents.PNG";
import simpleCalendarApp from "../Images/simpleCalendarApp.PNG";
import LambdaTreasureHunt from "../Images/Lambda Treasure Hunt.PNG";
import conwaysGame from "../Images/conwaysGame.PNG";
import noteTakingApp from "../Images/noteTakingApp.PNG";
import forexLandingPage from "../Images/forexLandingPage.PNG";
import sudoku from "../Images/sudoku.PNG";
import lambdaMud from "../Images/lambdaMud.PNG";
import symposium from "../Images/Symposium.PNG";
import simpleTodoList from "../Images/simpleTodList.PNG";

export const projectData = [
  {
    id: 14,
    features:
      "Follow list, Ability to follow a user, Ability to unfollow a user, edit profile, Ability to invite a user to the forums, Search for a user signed up to the forum, Ability to change a users role on a team",
    plan: "https://trello.com/b/HIIPPoKb/labs-11-social-board-2",
    title: "Symposium",
    deployUrl: "https://socialapp2.netlify.com/",
    githubUrl:
      "https://github.com/labs11-social-board/labs11_social_boardFE, https://github.com/labs11-social-board/labs11_social_boardBE",
    description:
      "Symposium is a 5-week project where I worked with 4 other developers on an existing codebase to add functionality and features.",
    technologies: "React Redux PostgreSql FullStack, sql Express",
    image: symposium,
    gif : "https://gfycat.com/zealousdecentandeancat"
  },
  {
    id: 13,
    features: "Create a note, Edit a note, Delete a note, Display a list of notes, 3D Carousel, Rhyme api, Export to CSV, Search for notes, Drag and Drop to sort notes, Sort by order note was created, Backend API's implemented, Backend database",
    plan:
      "https://trello.com/b/PZTzDkkd/lambda-notes-jonathan-jamel-holloway, https://trello.com/b/bXgHQV3W/lambda-notesbackend-jonathan-jamel-holloway",
    title: "Notetaking App",
    deployUrl: "https://notetakingapp.netlify.com/",
    githubUrl:
      "https://github.com/codejoncode/front-end-project-week, https://github.com/codejoncode/back-end-project-week",
    description: "Four-day frontend project designed to test the React and Redux skills learned at Lambda. The backend was later implemented after 4 weeks of studies with Lambda with another 4 days of work after assignment. This was my first full stack application.  Many features added on top of the original requirement. I had a lot of fun and perhaps realized this is the career I wanted during the creation of this project. ",
    technologies: "JavaScript Express Redux FullStack sql",
    image: noteTakingApp,
    gif: "https://gfycat.com/hilariousanyarabianoryx"
  },
  {
    id: 12,
    features:  "Implemented API commands, Set up Pusher notifications, Connected backend to frontend, Setup Login/Registration, Displays a Map",
    plan: "https://trello.com/b/LhHTe9fi/lambdamud-jonathan-holloway",
    title: "Lambda Mud",
    deployUrl: "https://silly-spence-1e4f95.netlify.com/",
    githubUrl:
      "https://github.com/codejoncode/LambdaMUD-Project, https://github.com/codejoncode/LambdaMUD-Client",
    description: "Another four-day project to test my knowledge of Python and Django at Lambda School. This is a full stack project with Django on the backend and React on the frontend.",
    technologies: "python django JavaScript React FullStack sql ",
    image: lambdaMud,
    gif: "https://gfycat.com/gloomyportlyincatern"
  },
  {
    id: 11,
    features: "An algorithm that traverses 500 rooms in under 1000 moves. Displays full map of 500 rooms, Shows exact location user is in, Able to select a room and go to it using BFST, Able to pick items up, Able to sell items",
    title: "Lambda Treasure Hunt",
    deployUrl: "https://codejoncode.github.io/lambda_treasure_hunt/",
    githubUrl: "https://github.com/codejoncode/lambda_treasure_hunt",
    description:
      "Lambda Treasure Hunt is a project with Django on the backend, and React on the frontend that illustrates graph traversal. Implemented the ability to travel to any given room using breadth-first search. Automated exploration to traverse the world and build a map. Map building Generate a graphical representation of the world map",
    technologies: "React JavaScript bootstrap sigma Algorithms",
    image: LambdaTreasureHunt,
    gif : "https://gfycat.com/singleweepyasp",
  },
  {
    id: 10,
    features: "Ability to display team data, Ability to display each players data",
    title: "Hash History Basketball League",
    deployUrl: "https://codejoncode.github.io/HashHistoryBasketballLeague",
    githubUrl: "https://github.com/codejoncode/HashHistoryBasketballLeague",
    description:
      "Application to go over React router and displaying components in React.",
    technologies: "React  JavaScript Algorithms",
    image: basketBallLeague,
    gif : "https://gfycat.com/rewardingrepulsivegermanpinscher",
  },
  {
    id: 9,
    features: "Backtracking algorithm, Puzzle solver,  Difficulty adjustment, Timer",
    title: "Sudoku",
    deployUrl: "https://codejoncode.github.io/Sudoku/",
    githubUrl: "https://github.com/codejoncode/Sudoku",
    description: "an application of the classic game of Sudoku",
    technologies: "JavaScript React Algorithms",
    image: sudoku,
    gif: "https://gfycat.com/welldocumentedkindisabellineshrike"
  },
  {
    id: 8,
    features: "Sample cell configurations that users can load and run, Option that creates a random cell configuration that users can run, Additional cell properties, Functionality to manually step through the simulation, Allow the user to change the dimension of the grid displayed",
    plan: "https://trello.com/b/bRjoKRwO/gameoflife-jonathanjamelholloway",
    title: "Conway's Game of Life",
    deployUrl: "https://codejoncode.github.io/Conways-Life/",
    githubUrl: "https://github.com/codejoncode/Conways-Life",
    description: "application in which users will be able to run different 'Game of Life' scenarios",
    technologies: "React JavaScript algorithms",
    image: conwaysGame,
    gif : "https://gfycat.com/bouncygargantuanhammerkop"
  },
  {
    id: 7,
    features: "Event listeners, Custom carousel built with vanilla JavaScript, Icon on hover, Multiple pages, Links perform animation",
    plan: "https://trello.com/b/kWyiFmtw/sj-architects-by-jonathan-holloway",
    title: "User Interface Project Week",
    deployUrl: "http://high-pitched-cloth.surge.sh/",
    githubUrl: "https://github.com/codejoncode/User-Interface-Project-Week",
    description:
      "Followed a design and implemented the application. Using Less CSS and HTML.",
    technologies: "LESS JavaScript Design",
    image: uiDesign, 
    gif: "https://gfycat.com/orangedeafeninggodwit"
  },
  {
    id: 6,
    title: "Forex Landing Page",
    deployUrl: "https://codejoncode.github.io/forex_page/",
    githubUrl: "https://github.com/codejoncode/forex_page",
    description: "An attempt to mimic design located at  https://dribbble.com/shots/3860958-Forex-Trading-Landing using nothing but my eyes and skills.",
    technologies: "Design React",
    image: forexLandingPage,
    gif: "https://gfycat.com/palewelloffamericanwigeon",
  },
  {
    id: 5,
    features: "Carousel Component,  Styled Components, Filter the cards using the tabs",
    title: "Lambda Times",
    deployUrl: "http://motionless-note.surge.sh/",
    githubUrl:
      "https://github.com/codejoncode/Sprint-Challenge-Lambda-Times-React",
    description: "Lambda School 3 hour Sprint challenge to convert vanilla Javascript into a React application and pass data through props.",
    technologies: "React JavaScript",
    image: lambdaTimes,
    gif: "https://gfycat.com/cheerynecessarycrownofthornsstarfish"
  },
  {
    id: 4,
    features: "Ability to navigate through different months, Ability to navigate through different years, Carousel",
    title: "Simple Calendar",
    deployUrl: "http://lethal-juice.surge.sh/",
    githubUrl: "https://github.com/codejoncode/Calendar",
    description:
      "A simple calendar application to practice skills learned in week 7 of Lambda School. This was not school related but practice to gain mastery in the topics. The application will allow one to move the year or the month and get the creat dates aligned on the application. I honestly didn't finish this application as I had desires to add tasks to certain date.",
    technologies: "moment  React JavaScript",
    image: simpleCalendarApp,
    gif: "https://gfycat.com/mildcelebratedkomododragon"
  },
  {
    id: 3,
    features:
      "ablilty to add to the list, ablility to delete from the list, ablility to set a timer, ability search through the list",
    title: "Todo List",
    deployUrl: "http://hard-to-find-power.surge.sh/",
    githubUrl: "https://github.com/codejoncode/React-Todo",
    description: "A simple to do list",
    technologies: "JavaScript React",
    image: simpleTodoList,
    gif: "https://gfycat.com/dimpledimperturbablehawk"
  },
  {
    id: 2,
    features: "Pagination system that allows loading the next page of data, Use of API to display data in react application, Hide data until a button is clicked",
    title: "React Wars",
    deployUrl: "http://ruddy-throne.surge.sh/",
    githubUrl: "https://github.com/codejoncode/Sprint-Challenge-React-Wars",
    description:
      "This was a Sprint Challenge in which I had three hours to implement a solution to the problem. Please see the repo link. Fetching data and displaying as we saw fit.",
    technologies: "React JavaScript",
    image: ReactWars,
    gif: "https://gfycat.com/lonelyunselfishdobermanpinscher"
    // gif : <div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/3bc77x0eyNK146hiKv" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/3bc77x0eyNK146hiKv">via GIPHY</a></p>
  },
  {
    id: 1,
    features: "Ability, do simple math, Ability continue doing math on the previous answer",
    title: "Simple Calculator",
    deployUrl: "http://worried-snakes.surge.sh/",
    githubUrl: "https://github.com/codejoncode/React-UI-Components",
    description:
      "A simple calculator application used at the beginning of learning how to use React to build components. This is from the React UI Components section of Lambda School.",
    technologies: "React JavaScript",
    image: calculatorComponents,
    gif: "https://gfycat.com/wholetartiberianchiffchaff"
    // gif: <div style="width:100%;height:0;padding-bottom:93%;position:relative;"><iframe src="https://giphy.com/embed/jU25hmr2NN5IIiHs3I" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/jU25hmr2NN5IIiHs3I">via GIPHY</a></p>
  },
  {
    id: 0,
    features: "Features simulate activity on a social network",
    title: "Social Card",
    deployUrl: "http://upbeat-son.surge.sh/",
    githubUrl: "https://github.com/codejoncode/React-UI-Components",
    description:
      "A social card used at the beginning of learning how to use React to build components. This is from the React UI Components section of Lambda School.",
    technologies: "React JavaScript",
    image: socialCard,
    gif : "https://gfycat.com/weirdtatteredflatcoatretriever"
    // gif: "<iframe src="https://giphy.com/embed/woBWv3IocOeomG6EZi" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/woBWv3IocOeomG6EZi">via GIPHY</a></p>"
  }
  // {title: "", deployUrl: "", githubUrl: "", description: "", technologies: "", image: ""},
  //https://trello.com/b/50RLXiA4/events-app
];

export const technologiesData = [];
for (let project of projectData) {
  const tech = project.technologies.split(" ");
  for (let t of tech) {
    if (technologiesData.includes(t.toUpperCase()) === false && t.length > 0) {
      technologiesData.push(t.toUpperCase());
    }
  }
}

technologiesData.sort();

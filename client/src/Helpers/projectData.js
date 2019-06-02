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
    {id: 14, features : "Follow list, Ability to follow a user, Ability to unfollow a user, edit profile, Ability to invite a user to the forums, Search for a user signed up to the forum, Ability to change a users role on a team" , plan: "https://trello.com/b/HIIPPoKb/labs-11-social-board-2", title: "Symposium", deployUrl: "https://socialapp2.netlify.com/", githubUrl: "https://github.com/labs11-social-board/labs11_social_boardFE, https://github.com/labs11-social-board/labs11_social_boardBE", description: "Symposium is a 5-week project where I worked with 4 other developers on an existing codebase to add functionality and features.", technologies: "React Redux PostgreSql", image: symposium},
    {id: 13, plan: "https://trello.com/b/PZTzDkkd/lambda-notes-jonathan-jamel-holloway https://trello.com/b/bXgHQV3W/lambda-notesbackend-jonathan-jamel-holloway", title: "Notetaking App", deployUrl: "https://notetakingapp.netlify.com/", githubUrl: "https://github.com/codejoncode/front-end-project-week https://github.com/codejoncode/back-end-project-week", description: "", technologies: "JavaScript Express FullStack sql", image: noteTakingApp},
    {id: 12, plan: "https://trello.com/b/LhHTe9fi/lambdamud-jonathan-holloway", title: "Lambda Mud", deployUrl: "https://silly-spence-1e4f95.netlify.com/", githubUrl: "https://github.com/codejoncode/LambdaMUD-Project https://github.com/codejoncode/LambdaMUD-Client", description: "", technologies: "python django JavaScript React FullStack", image: lambdaMud},
    {id: 11, title: "Lambda Treasure Hunt", deployUrl: "https://codejoncode.github.io/lambda_treasure_hunt/", githubUrl: "https://github.com/codejoncode/lambda_treasure_hunt", description: "Lambda Treasure Hunt is a project with Django on the backend, and React on the frontend that illustrates graph traversal. Implemented the ability to travel to any given room using breadth-first search. Automated exploration to traverse the world and build a map. Map building Generate a graphical representation of the world map", technologies: "React JavaScript bootstrap sigma", image: LambdaTreasureHunt},
    {id: 10, title: "Hash History Basketball League", deployUrl: "https://codejoncode.github.io/HashHistoryBasketballLeague", githubUrl: "https://github.com/codejoncode/HashHistoryBasketballLeague", description: "Application to go over React router and displaying components in React from a Tyler Mcginnis course.", technologies: "React  JavaScript", image: basketBallLeague},
    {id: 9, title: "Sudoku", deployUrl: "https://codejoncode.github.io/Sudoku/", githubUrl: "https://github.com/codejoncode/Sudoku", description: "", technologies: "JavaScript React", image: sudoku},
    {id: 8, plan: "https://trello.com/b/bRjoKRwO/gameoflife-jonathanjamelholloway", title: "Conway's Game of Life", deployUrl: "https://codejoncode.github.io/Conways-Life/", githubUrl: "https://github.com/codejoncode/Conways-Life", description: "", technologies: "React JavaScript algorithms", image: conwaysGame},
    {id: 7, plan: "https://trello.com/b/kWyiFmtw/sj-architects-by-jonathan-holloway", title: "User Interface Project Week", deployUrl: "http://high-pitched-cloth.surge.sh/", githubUrl: "https://github.com/codejoncode/User-Interface-Project-Week", description: "Followed a design and implemented the application. Using Less CSS and HTML.", technologies: "LESS", image: uiDesign},
    {id: 6, title: "Forex Landing Page", deployUrl: "https://codejoncode.github.io/forex_page/", githubUrl: "https://github.com/codejoncode/forex_page", description: "", technologies: "Design React", image: forexLandingPage},
    {id: 5, title: "Lambda Times", deployUrl: "http://motionless-note.surge.sh/", githubUrl: "https://github.com/codejoncode/Sprint-Challenge-Lambda-Times-React", description: "React JavaScript", technologies: "React JavaScript", image: lambdaTimes},
    {id: 4 , title: "Simple Calendar", deployUrl: "http://lethal-juice.surge.sh/", githubUrl: "https://github.com/codejoncode/Calendar", description: "A simple calendar application to practice skills learned in week 7 of Lambda School. This was not school related but practice to gain mastery in the topics. The application will allow one to move the year or the month and get the creat dates aligned on the application. I honestly didn't finish this application as I had desires to add tasks to certain date.", technologies: "moment  React JavaScript", image: simpleCalendarApp},
    {id:3, features: "ablilty to add to the list, ablility to delete from the list, ablility to set a timer, ability search through the list", title: "Todo List", deployUrl: "http://hard-to-find-power.surge.sh/", githubUrl: "https://github.com/codejoncode/React-Todo", description: "A simple to do list", technologies: "JavaScript React", image: simpleTodoList},
    {id: 2, title: "React Wars", deployUrl: "http://ruddy-throne.surge.sh/", githubUrl: "https://github.com/codejoncode/Sprint-Challenge-React-Wars", description: "This was a Sprint Challenge in which I had three hours to implement a solution to the problem. Please see the repo link. Fetching data and displaying as we saw fit.", technologies: "React JavaScript", image: ReactWars},
    {id: 1, title: "Simple Calculator", deployUrl: "http://worried-snakes.surge.sh/", githubUrl: "https://github.com/codejoncode/React-UI-Components", description: "A simple calculator application used at the beginning of learning how to use React to build components. This is from the React UI Components section of Lambda School.", technologies: "React JavaScript", image: calculatorComponents},
    {id: 0, title: "Social Card", deployUrl: "http://upbeat-son.surge.sh/", githubUrl: "https://github.com/codejoncode/React-UI-Components", description: "A social card used at the beginning of learning how to use React to build components. This is from the React UI Components section of Lambda School.", technologies: "React JavaScript", image: socialCard},
    // {title: "", deployUrl: "", githubUrl: "", description: "", technologies: "", image: ""},
    //https://trello.com/b/50RLXiA4/events-app
]


export const technologiesData = []
for (let project of projectData){
  const tech = project.technologies.split(' ');
  for (let t of tech){
    if (technologiesData.includes(t) === false && t.length > 0){
      technologiesData.push(t)
    }
  }
}

technologiesData.sort(); 



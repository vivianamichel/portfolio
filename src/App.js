import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import me from './images/profile.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import pacman from './images/pacman.jpg';
import maze from './images/maze.PNG';
import network from './images/network.jpg';
import tweeter from './images/tweeter.PNG';
import gitlet from './images/gitlet.jpg';
import enigma from './images/enigma.jpg';
import insta from './images/insta.png';
import linkedin from './images/linkedin.png';
import mail from './images/mail.png';
import github from './images/github.png';

const App = () => (
  <div className='app'>
    {/* <h1>Portfolio Website</h1> */}
    <Navigation />
    <Main />
   </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li id="header">VIVIANA MICHEL</li>
      <li><NavLink exact activeClassName="current" to='/contact'>CONTACT</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/projects'>PROJECTS</NavLink></li>
      <li><a rel="noopener noreferrer" href="https://berkeley.box.com/s/nuqyhd0xjisz8hxpsv51emyr4mkpmgw7" target="_blank">MY CV</a></li>
      {/* <li><NavLink exact activeClassName="current" to='/cv'>MY CV</NavLink></li> */}
      <li><NavLink exact activeClassName="current" to='/home'>HOME</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <img src={me} width="26%" height="26%" align="right" id="profilepic"></img>
    <div id="mediumtext">Hello! My name is</div>
    <div id="largetext">Viviana Michel</div>
    <div id="smalltext">I am a junior at University of California, Berkeley studying Data Science and Computer Science.</div>
    <div id="mylanguages">LANGUAGES
      <div id="languagetext">
      <p>Java
        <div id="JavaProgress">
        <div id="JavaBar"></div>
        </div>
      </p>
      <p>Python
        <div id="PythonProgress">
        <div id="PythonBar"></div>
        </div>
      </p>
      <p>JavaScript/TypeScript
        <div id="jstsProgress">
        <div id="jstsBar"></div>
        </div>
      </p>
      <p>HTML
        <div id="HTMLProgress">
        <div id="HTMLBar"></div>
        </div>
      </p>
      <p>CSS
        <div id="CSSProgress">
        <div id="CSSBar"></div>
        </div>
      </p>
      <p>SQL
        <div id="SQLProgress">
        <div id="SQLBar"></div>
        </div>
      </p>
      </div>
      </div>
      <div id="myframeworks">
      FRAMEWORKS/TECHNOLOGY
        <div id="frameworktext">
          IONIC | ANGULAR 8 | LINUX | EXPRESS.js | REACT | MYSQL |  Node JS | Mocha
          
        </div>
      </div>
  </div>
);
// const CV = () => (
//   <div className='cv'>
  
//   </div>
// );
const PROJECTS = () => (
  <div className='projects'>
    PROJECTS
    <CardGroup>
    <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={maze} />
        <Card.Body>
        <Card.Title>Pathfinder Visualizer</Card.Title>
        <Card.Subtitle className="text-muted">
          <p>Visually shows the order of nodes visited in Djkstra's Algorithm and A* search and returns the 
            shortest path. User can also add walls and create mazes and find the shortest path. Linked below.</p>
          <p>Languages: JavaScript, CSS</p>
          <p>Frameworks: React</p>
          <NavLink to='/pathfinder'>PathFinder</NavLink>
        </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={network}/>
        <Card.Body>
        <Card.Title>Language Classification</Card.Title>
        <Card.Subtitle className="text-muted">
          <p> Built a smaller neural network model that identifies language for one word at a time. 
            Our dataset consisted of words of different lengths. Classified five different languages with 84% accuarcy. </p>
           <p>Language: Python</p>
        </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={pacman} />
        <Card.Body>
        <Card.Title>Pacman</Card.Title>
        <Card.Subtitle className="text-muted">
          <p>Created multiple pacman games using different AI techniques. Implemented depth-first, breadth-first, 
           uniform cost, and A* search algorithms, as well as multiagent minimax and expectimax algorithms, and 
           used markov decision process techniques, Q-Learning and Reinforcement Learning. </p>
           <p>Language: Python</p>
        </Card.Subtitle>
        </Card.Body>
      </Card>
    </CardGroup>
    <p></p>
    <CardGroup>
    <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={tweeter} />
        <Card.Body>
        <Card.Title>
          HackSC-Tweeter
        </Card.Title>
        <Card.Subtitle className="text-muted">
          <p>Created a social media platform, similar to Twitter for tweens. Before anything can be posted an AI determines 
           the niceness of the message. Anything negative cannot be posted. Built using JavaScript, HTML, CSS, Ionic and 
           Angular and implemented Google Firebase to store data.</p>
          <p>Languages: JavaScript, HTML, CSS</p>
          <p>Frameworks/Tech: Ionic, Angular, Google Firebase</p>
        </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={gitlet} />
        <Card.Body>
        <Card.Title>Gitlet</Card.Title>
        <Card.Subtitle className="text-muted">
          <p>Created a version-control system that mimics some of the basic features of Git in Java. The program created a 
           backup system of collections of files, to save versions of project periodically and the ability to restore to 
           previous versions. Implemented serializable to save contents of files in bytes.</p>
          <p>Language: Java</p>
        </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={enigma} />
        <Card.Body>
        <Card.Title>Engigma</Card.Title>
        <Card.Subtitle className="text-muted">
          <p> The enigma machines created in Germany used during World War II to encrypt its military communications.
            The program take descriptions of possible initial configurations of the machine and messages to encode or decode.
          </p>
          <p>Language: Java</p>
        </Card.Subtitle>
        </Card.Body>
      </Card>
    </CardGroup>
    <div id="smallptext">Due to UC Berkeley's Honor Code, I cannot publicize code for course 
    projects. Please feel free to email me with context for access.</div>
  </div>
);

const Contact = () => (
  <div className='contact'>
      GET IN TOUCH
        <a rel="noopener noreferrer" href="mailto:vmichel@berkeley.edu">
            <img src={mail} height="30" weight="30"></img>
        </a>
        <a href="https://www.linkedin.com/in/viviana-michel-459621190/">
            <img src={linkedin} height="30" weight="30"></img>
        </a>
        <a href="https://github.com/vivianamichel">
            <img src={github} height="30" weight="30"></img>
        </a>
        <a href="https://www.instagram.com/vivianaamichel/">
            <img src={insta} height="30" weight="30"></img>
        </a>
    <img src={me} width="26%" height="26%" align="left" id="profilepic"></img>
    <div id="mediumtext">I am a rising junior studying computer science and data science at UC Berkeley. 
    I grew up in Oxnard, California which is where I have lived my whole life and where I took my first CS 
    class on a whim. Since then I knew computer science was something I wanted to make a career in. </div>
  </div>
);

const PathFinder = () => (
  <div className='pathfinder'>
    <PathfindingVisualizer></PathfindingVisualizer>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/projects' component={PROJECTS}></Route>
    <Route exact path='/pathfinder' component={PathFinder}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <div id="header">
          <button id="menu" onClick={toggleMenu}>☰</button>
          <div id="title">Ignitia</div>
        </div>
        <ul id="menubar" style={{ display: menuVisible ? 'block' : 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/clubs">Clubs</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <hr />
      <br />
      <img
        src="/images/ignitia.gif"
        alt="Ignitia Animated Logo"
        style={{ display: 'block', margin: 'auto' }}
      />

      {/* About Section */}
      <div id="about">
        <h1>About Us</h1>
        <br />
        <p>Welcome to Ignitia !!! A grand celebration of innovation ...</p>
      </div>

      {/* Vision Section */}
      <div id="vision">
        <h1>Our Vision</h1>
        <br />
        <p>Ignitia is built on the belief that every individual ...</p>
      </div>

      {/* Events Section */}
      <div id="events">
        <h1>Events</h1>
        <br /><br />

        <div className="event-section">
          <h2>Tech Events</h2>
          <br />
          <ol>
            <li>
              <h3><b>1. CodeIgnite</b></h3><br />
              <div className="img-container">
                <img src="/images/code ig.jpg" height="300" width="300" alt="Code Ignite Event" />
              </div><br />
              <h4><u>Description</u> :</h4>
              <p>A 24-hour coding marathon ...</p>
              <h4><u>Highlights</u> :</h4>
              <p>✔ Industry-level problem statements</p>
              <p>✔ Mentorship from experts</p>
              <p>✔ Exciting prizes</p>
              <Link to="/register/codeignite">
                <button className="buttons">Register Now</button>
              </Link>
            </li>

            <li>
              <h3><b>2. Robo-Wars</b></h3><br />
              <div className="img-container">
                <img src="/images/robowars.jpg" height="300" width="300" alt="Robo Wars Event" />
              </div><br />
              <h4><u>Description</u> :</h4>
              <p>A thrilling battle between self-built robots ...</p>
              <h4><u>Highlights</u> :</h4>
              <p>✔ Engineering meets combat</p>
              <p>✔ Live-action robot battles</p>
              <Link to="/register/robowars">
                <button className="buttons">Register Now</button>
              </Link>
            </li>
          </ol>
        </div>

        <div className="event-section">
          <h2>Non-Tech Events</h2>
          <br />
          <ol>
            <li>
              <h3><b>3. Mind Maze</b></h3><br />
              <div className="img-container">
                <img src="/images/mind_maze.jpg" height="300" width="300" alt="Mind Maze Event" />
              </div><br />
              <h4><u>Description</u> :</h4>
              <p>A general knowledge and tech quiz ...</p>
              <h4><u>Highlights</u> :</h4>
              <p>✔ Fast-paced buzzer rounds</p>
              <p>✔ Fun trivia</p>
              <Link to="/register/mindmaze">
                <button className="buttons">Register Now</button>
              </Link>
            </li>

            <li>
              <h3><b>4. Treasure Hunt</b></h3><br />
              <div className="img-container">
                <img src="/images/hunt.jpg" height="300" width="300" alt="Treasure Hunt Event" />
              </div><br />
              <h4><u>Description</u> :</h4>
              <p>A thrilling scavenger hunt ...</p>
              <h4><u>Highlights</u> :</h4>
              <p>✔ Solve tricky riddles</p>
              <p>✔ Team-building</p>
              <Link to="/register/treasurehunt">
                <button className="buttons">Register Now</button>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;

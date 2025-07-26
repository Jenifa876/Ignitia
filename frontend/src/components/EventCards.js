import React from 'react';
import './EventCards.css';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 'codeignite',
    name: 'CodeIgnite',
    img: '/images/code ig.jpg',
    description: '24-hour coding marathon with real-world problems.',
  },
  {
    id: 'robowars',
    name: 'Robo-Wars',
    img: '/images/robowars.jpg',
    description: 'Battle between self-made combat robots.',
  },
  {
    id: 'mindmaze',
    name: 'Mind Maze',
    img: '/images/mind_maze.jpg',
    description: 'A tech and general knowledge quiz.',
  },
  {
    id: 'treasurehunt',
    name: 'Treasure Hunt',
    img: '/images/hunt.jpg',
    description: 'Solve riddles and explore campus to win!',
  },
];

function EventCards() {
  return (
    <div className="card-grid">
      {events.map((event) => (
        <div key={event.id} className="card">
          <img src={event.img} alt={event.name} />
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <Link to={`/register/${event.id}`}>
            <button className="card-button">Register</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EventCards;

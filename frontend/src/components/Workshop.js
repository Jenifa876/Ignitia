import React from 'react';
import './EventCards.css';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 'aibootcamp',
    name: 'AI-Bootcamp',
    img: '/images/ai-bootcamp.png',
    description: 'Learn the basics of Artificial Intelligence',
  },
  {
    id: 'appdevelopment',
    name: 'App-Development-Sprint',
    img: '/images/app-develepment.png',
    description: 'Build mobile apps from scratch',
  },
  {
    id: 'datascience',
    name: 'Data Science Bootcamp',
    img: '/images/data-science.png',
    description: 'Analyze and visualize big data',
  },
  {
    id: 'careerbuilding',
    name: 'Career Building Workshop',
    img: '/images/career-guidance.png',
    description: 'Build resumes, portfolios, LinkedIn',
  },
];

function Workshop() {
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

export default Workshop;

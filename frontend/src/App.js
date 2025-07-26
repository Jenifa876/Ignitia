//frontend/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CodeIgniteRegister from './components/CodeIgniteRegister';
import TreasureHuntRegister from './components/TreasureHuntRegister';
import RoboWarsRegister from './components/RoboWarsRegister';
import MindMazeRegister from './components/MindMazeRegister';
import AiBootCamp from './components/AiBootCamp';
import AppDevelopment from './components/AppDevelopment';
import CareerBuliding from './components/CareerBuilding';
import DataScience from './components/DataScience';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/codeignite" element={<CodeIgniteRegister />} />
      <Route path="/register/treasurehunt" element={<TreasureHuntRegister />} />
      <Route path="/register/robowars" element={<RoboWarsRegister />} />
      <Route path="/register/mindmaze" element={<MindMazeRegister />} />
      <Route path="/register/aibootcamp" element={<AiBootCamp />} />
      <Route path="/register/appdevelopment" element={<AppDevelopment />} />
      <Route path="/register/careerbuilding" element={<CareerBuliding />} />
      <Route path="/register/datascience" element={<DataScience />} />
    </Routes>
  );
}

export default App;

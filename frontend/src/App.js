import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CodeIgniteRegister from './components/CodeIgniteRegister';
import TreasureHuntRegister from './components/TreasureHuntRegister';
import RoboWarsRegister from './components/RoboWarsRegister';
import MindMazeRegister from './components/MindMazeRegister';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/codeignite" element={<CodeIgniteRegister />} />
      <Route path="/register/treasurehunt" element={<TreasureHuntRegister />} />
      <Route path="/register/robowars" element={<RoboWarsRegister />} />
      <Route path="/register/mindmaze" element={<MindMazeRegister />} />
    </Routes>
  );
}

export default App;

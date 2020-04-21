import React from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/SkillsLayout';

function App() {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
}

export default App;

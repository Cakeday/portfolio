import React from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/SkillsLayout';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;

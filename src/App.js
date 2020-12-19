import React from 'react';
import ContentWrapper from './components/ContentWrapper';
import Hero from './components/Hero';
import About from './components/About'
import WorkAndProjects from './components/WorkAndProjects'
// import { Projects } from './components/Projects';
// import { Skills } from './components/SkillsLayout';
// import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Hero />
      <ContentWrapper>
        <About />
        <WorkAndProjects />
      </ContentWrapper>
    </div>
  );
}

export default App;

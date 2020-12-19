import React, { useRef } from 'react';
import ContentWrapper from './components/ContentWrapper';
import Hero from './components/Hero';
import About from './components/About'
import WorkAndProjects from './components/WorkAndProjects'
// import { Projects } from './components/Projects';
// import { Skills } from './components/SkillsLayout';
// import { Contact } from './components/Contact';

const App = () => {

  const scrollRef = useRef()

  const triggerScroll = () => {
    scrollRef.current.scrollIntoView({behavior: "smooth"})
  }


  return (
    <div>
      <Hero triggerScroll={triggerScroll} />
      <ContentWrapper>
        <About ref={scrollRef} />
        <WorkAndProjects />
      </ContentWrapper>
    </div>
  );
}

export default App;

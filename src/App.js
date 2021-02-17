import React, { useRef } from 'react';
import ContentWrapper from './components/ContentWrapper';
import Hero from './components/Hero';
import About from './components/About'
import WorkAndProjects from './components/WorkAndProjects'

import ReactGA from 'react-ga';

const App = () => {

  const scrollRef = useRef()

  const triggerScroll = () => {
    scrollRef.current.scrollIntoView({behavior: "smooth"})
  }

  const trackingId = "G-9XLHX3WTGK"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname);


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

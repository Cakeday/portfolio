import React, { forwardRef } from 'react';
import { AboutSection, Content, P, FlexContainer } from './AboutSection'
import Img from '../common/CircularImg'
import Line from "../common/GradientLine";

import Me from '../../assets/PortlandMe.JPG'

const Index = forwardRef((props, ref) => {

    return (
        <AboutSection ref={ref}>
            <FlexContainer>
                <Content>
                    <h1>About me</h1>
                    <Line justifyLeft/>
                    <P>
                        I am an experienced web developer who loves monkeying 
                        with the latest and greatest React libraries and methodologies. 
                        I am currently changing the future of charitable giving with Just One 
                        Penny. Some of my hobbies include 
                        yoyo-ing <span role="img" aria-label="Yo-yo emoji">🪀</span>, 
                        sailing <span role="img" aria-label="Sailboat emoji">⛵️</span>, 
                        slacklining, and music production <span role="img" aria-label="Headphones emoji">🎧</span> 
                    </P>
                </Content>

                <Img source={Me} alt="Caleb at waterfall in Oregon." />

            </FlexContainer>
        </AboutSection>
    );
})

export default Index;

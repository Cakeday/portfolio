import React from 'react';
import styled from 'styled-components'

import Line from '../common/GradientLine'

import unibui1 from '../../assets/unibui1.png'
// import unibui2 from '../../assets/unibui2.png'
// import unibui3 from '../../assets/unibui3.png'

import WhatDoYouMern1 from '../../assets/WhatDoYouMern1.png'
// import WhatDoYouMern2 from '../../assets/WhatDoYouMern2.png'
// import WhatDoYouMern3 from '../../assets/WhatDoYouMern3.png'

import justonepenny1 from '../../assets/justonepenny1.png'

const Container = styled.div`
    padding: 10em 10em 5em;
`

const H1 = styled.h1`
    text-align: center;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: top;
    object-fit: contain;
    gap: 1em;
`

const Image = styled.img`
    width: 100%;
`

const Card = styled.div`
    width: 100%;
`



// const data = [

//     {
//         source: "",
//         title: "JustOnePenny",
//         role: "Software Engineering Internship",
//         description: "Worked with the founding team to develop, from the ground up, a revolutionary micro-giving platform that aims to bring charitable giving into the 21st century. I worked across the tech stack by designing schemas, building out API routes, and implementing 3rd party integrations to create JOP’s minimum viable product to attract investor attention in Q4 of 2020. I implemented social logins using Facebook and Google OAuth to streamline user experience and increase conversion rates of users registering on the platform. I also developed key feature that allows for donations to be efficiently queried by the charity they belong to, along with pagination and full test coverage. We collaborated remotely during weekly sprints, using Github for source control and regular code review, Jira for product management, and Slack for general communication."
//     },
//     {
//         source: "",
//         title: "Unibui",
//         role: "Software Engineering Internship",
//         description: "Unibui connects college students to the local economy by partnering with local businesses to provide reduced rates to students. Unibui also partners with colleges to secure necessary supplies (in light of COVID-19) that would allow the safe reopening of colleges. I led the team in a major refactoring of the front-end, implementing testing, TypeScript, Redux Toolkit, hooks, and code colocation to account for future onboarding of engineers as well as diminish anti-patterns while cementing best-practices. I also moved the team to a kanban-style workflow that allowed for clearer division of responsibility."
//     },
//     {
//         source: "",
//         title: "WhatDoYouMern",
//         role: "Personal Project",
//         description: "Built a social media application that allows users to follow one another, post updates, like posts, and edit profile information. I developed a secure API with route authentication, input validation, and password hashing following RESTful guidelines, with connections to AWS and the server’s file system via Node to handle multimedia inputs. I also built the full front-end from scratch using React for component-driven design and Bootstrap Material Design for an intuitive UI."
//     },
// ]


const index = () => {
    return (
        <Container>
            <H1>Work and Projects</H1>
            <Line />
            <Grid>
                <Card>
                    <a href="https://www.justonepenny.org" target="_blank" rel="noopener noreferrer"><Image src={justonepenny1} /></a>
                    <h5>Just One Penny</h5>
                    <p>Worked with the founding team to develop, from the ground up, a revolutionary micro-giving platform that aims to bring charitable giving into the 21st century. I worked across the tech stack by designing schemas, building out API routes, and implementing 3rd party integrations to create JOP’s minimum viable product to attract investor attention in Q4 of 2020. I implemented social logins using Facebook and Google OAuth to streamline user experience and increase conversion rates of users registering on the platform. I also developed key feature that allows for donations to be efficiently queried by the charity they belong to, along with pagination and full test coverage. We collaborated remotely during weekly sprints, using Github for source control and regular code review, Jira for product management, and Slack for general communication.</p>
                </Card>
                <Card>
                    <a href="https://www.unibui.com" target="_blank" rel="noopener noreferrer"><Image src={unibui1} /></a>
                    <h5>Unibui</h5>
                    <p>Unibui connects college students to the local economy by partnering with local businesses to provide reduced rates to students. Unibui also partners with colleges to secure necessary supplies (in light of COVID-19) that would allow the safe reopening of colleges. I led the team in a major refactoring of the front-end, implementing testing, TypeScript, Redux Toolkit, hooks, and code colocation to account for future onboarding of engineers as well as diminish anti-patterns while cementing best-practices. I also moved the team to a kanban-style workflow that allowed for clearer division of responsibility.</p>
                </Card>
                <Card>
                    <a href="https://github.com/Cakeday/WhatDoYouMern" target="_blank" rel="noopener noreferrer"><Image src={WhatDoYouMern1} /></a>
                    <h5>WhatDoYouMern</h5>
                    <p>Built a social media application that allows users to follow one another, post updates, like posts, and edit profile information. I developed a secure API with route authentication, input validation, and password hashing following RESTful guidelines, with connections to AWS and the server’s file system via Node to handle multimedia inputs. I also built the full front-end from scratch using React for component-driven design and Bootstrap Material Design for an intuitive UI.</p>
                </Card>
            </Grid>
        </Container>
    );
}

export default index;

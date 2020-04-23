import React from 'react'
import Particles from 'react-particles-js'

export function ParticleCanvas() {

    const style = {
        'touch-action': 'none'
    }

    return (
            <Particles style={style} className="h-100 w-100"
                params={{ 
                    particles: { 
                        number: { 
                            value: 200, 
                            density: { 
                                enable: true, 
                                value_area: 1000, 
                            } 
                        },
                        color: {
                            value: ["#9933ff", "#00ccff"]
                        },
                        size: {
                            value: 2
                        },
                        opacity: {
                            animation : {
                                enable: false
                            }
                        },
                        lineLinked: {
                            color: "#343a40"
                        },
                        move: {
                            speed: 0.7
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            modes: {
                                
                            }
                        }
                    } 
                }} 
            >
            </Particles>
    )
}
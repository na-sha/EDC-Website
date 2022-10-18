import React, { useRef, useLayoutEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Vector from './Vector'

const VectorContainer = styled.div`
position:absolute;
top:0.5rem;
left:50%;
transform:translate(-50%);
width:100%;
height:100%;
overflow:hidden;

svg{
    width:100%;
    height:100%
}

@media(max-width:768px){
    left:1rem;
}
`

const Bounce = keyframes`
from { transform: translateX(-50%) scale(0.5); }
to { transform: translateX(-50%) scale(1); }
`

const Ball = styled.div`
position:absolute;
top:0.5rem;
left:50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: #ebe134;
animation: ${Bounce} 1s linear infinte alternate;
@media(max-width:768px){
    left:1rem;
}

`


const DrawSVG = () => {

    const ref = useRef(null);
    const ballRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        let element = ref.current;
        let svg = document.getElementsByClassName('svg-path')[0];
        const length = svg.getTotalLength();

        // console.log(length);
        svg.style.strokeDasharray = length;

        svg.style.strokeDashoffset = length;

        let t1 = gsap.timeline({
            scrollTrigger:{
                trigger: element,
                start: 'top center',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    const draw = length * self.progress;

                    // svg.style.strokeDasharray = length -draw;
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: self =>{
                    if(self.isActive){
                        // console.log('scrolling is active');
                        ballRef.current.style.display = 'none';
                    }else{
                        // console.log('scrolling is not active');
                        ballRef.current.style.display = 'inline-block';
                    }
                }
            }
        })

        return () => {

        };
    }, [])

    return (
        <>
        <Ball ref={ballRef}/>
        <VectorContainer ref={ref}>
            <Vector />
        </VectorContainer>
        </>
    )
}

export default DrawSVG
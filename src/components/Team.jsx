import React from 'react'
import styled from 'styled-components'
import { keyframes} from "styled-components"

const Section = styled.section`
min-height:100vh;
min-width: 100vw;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;

position:relative;
`

const move = keyframes`
0%{
    transform: translateX(100%);
};
100%{
    transform: translateX(-100%);
}
`

const Row = styled.div`
background-color:lightblue;
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display:flex;

animation: ${move} 10s linear infinte; 

div{
    width: 5rem;
    height: 5rem;
    margin:2rem;
    background-color: yellow;
}
`

const Team = () => {
    return (
        <Section>
            <Row>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
                <div>Item 7</div>
                <div>Item 8</div>
                <div>Item 9</div>
                <div>Item 10</div>
                {/* <div>Item 11</div>
                <div>Item 12</div> */}
            </Row>
        </Section>
    )
}

export default Team
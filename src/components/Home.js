import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion/Accordion'
import Carousel from './Carousel/Carousel'
import CarouselData from './Carousel/CarouselData'

const RightTextBox = styled.div`
    position: absolute;
    right: -10px;
    width: 200px;
    height: 120px;
    border: 3px solid blue;
    padding: 1;
    margin: 2rem;`

const CenterTextBox = styled.div`
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    `
const WelcomeTo = styled.h1`
    font-size: 3rem;
    color: blue;
    left: -3rem;
    padding: 1;
    margin: .5rem;
    position: relative;`

const TitleParent = styled.h1`
    font-size: 4rem;
    color: blue;
    right: -3rem;
    padding: 1;
    margin: .5rem;
    position: relative;
`
const MissionStatement = styled.h4`
    font-size: 1.5rem;
    color: blue;
    padding: 1;
    margin: auto;
    width: 800px;
`

const Home = () => {
    return (
        <div>
            <WelcomeTo>Welcome to</WelcomeTo> 
            <TitleParent>Parent Path</TitleParent>
            <MissionStatement>Guiding families down the path to build healthy environments, 
                where children can grow to be smart, caring, and confident. </MissionStatement>
            <CenterTextBox>
                <Accordion/>
                <Carousel slides={CarouselData}/>
                <RightTextBox>
                    <h3>Other Websites</h3>
                        <ul>...</ul>
                </RightTextBox>
            </CenterTextBox>
        </div>
    )
}

export default Home; 
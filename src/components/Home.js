import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion/Accordion'

const LeftTextBox = styled.p`
    position: absolute;
    left: -10px;
    width: 200px;
    height: 120px;
    border: 3px solid blue;
    padding: 1;
    margin: 2rem;`

const RightTextBox = styled.p`
    position: absolute;
    right: -10px;
    width: 200px;
    height: 120px;
    border: 3px solid blue;
    padding: 1;
    margin: 2rem;`

const CenterTextBox = styled.p`
    width: 400px;
    height: 120px;
    margin: auto;
    padding: 1px;
    border: 3px solid green;`
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
            {/* <CenterTextBox>Center</CenterTextBox> */}
            <RightTextBox>
                Right
            </RightTextBox>
            <Accordion/>
            {/* <LeftTextBox></LeftTextBox> */}
            <p>For Parents:</p>
                <p>Child Care Resources</p>
                <p>Family Fun</p>
                <p>Education</p>
        </div>
    
    )
}

export default Home; 
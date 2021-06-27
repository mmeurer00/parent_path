import React from 'react';
import styled from 'styled-components'
import FavoriteDisplay from './FavoriteDisplay'

const Title = styled.h1`
    color: blue;
    font-size: 2rem;
`
const LeftTextBox = styled.p`
    display: inline-block;
    border-radius: 10%;
    border-style: solid;
    margin: 10px;
    padding: 10px;   
    margin-bottom: +70px;
`

const Favorite = () => {
    return (
    <>
    <Title>Favorites!</Title>
    <FavoriteDisplay />
    </>
    )

}

export default Favorite; 
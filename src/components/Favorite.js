import React from 'react';
import styled from 'styled-components'
import FavoriteDisplay from './FavoriteDisplay'

const Title = styled.h1`
    color: blue;
    font-size: 2rem;
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
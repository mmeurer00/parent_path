import React, { useState } from 'react';
import Post from './Post'
import Modal from './Modal/Modal'
import Button from './Button/Button'
import styled from 'styled-components'

const Container = styled.div`
    margin: auto;
    align-items: center;
`
const Title = styled.h1`
    justify-content: center;
    font-size: 3rem;
`
function Community() {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <div>
            <Title>Community Post Feed</Title>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Container>
                <Button onClick={openModal}>Share Post</Button>
                {/* <Button>Top Posts</Button> */}
            </Container>
            <Post />
        </div>
    )
}

export default Community
import React, { useState } from 'react';
import Post from './Post'
import Modal from './Modal/Modal'
import Button from './Button/Button'
import styled from 'styled-components'

const Container = styled.div`
    height: 5rem;
    margin: 3rem;
    align-items: 'center';
`


function Community() {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <div>
            <h1>Community!</h1>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Container>
                <Button onClick={openModal}>Share Post</Button>
                <Button>Top Posts</Button>
            </Container>
            <Post />
        </div>
    )
}

export default Community
import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import CommunityForm from '../CommunityForm'

const Background = styled.div`
    width: 100%;
    height: 75%;
    background: rgb(46, 38, 96, 0.70);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const ModalWrapper = styled.div`
    width: 400px;
    height: 400px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    margin: auto;
    z-index: 10;
    border-radius: 10px;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #141414;
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`
const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
        duration: 250
    },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
        setShowModal(false);
        }
    }

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },
        [keyPress]
    );

  return (
    <>
        {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <div>
                        < CommunityForm />
                        </div>
                    </ModalContent>
                    <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}
                    />
                </ModalWrapper>
            </animated.div>
        </Background>
      ) : null}
    </>
  )
}

export default Modal
import React, { useState } from 'react'
import { Data } from './AccordionData'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionSection = styled.div`
    left: -10px;
    // display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 1rem;
    background: #fff;
    margin: 2rem;
    width: 25rem;
`

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 25rem;
`

const Wrap = styled.div`
  background: purple;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: .5rem;
    font-size: 1.3rem;
  }
  span {
    margin-right: 1.3rem;
  }
`

const Dropdown = styled.div`
  background: white;
  color: purple;
//   width: 100%;
  width: 25rem;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid blue;
  border-top: 1px solid blue;
  p {
    font-size: 1.2rem;
  }
`

const Accordion = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null)
    }

    setClicked(index)
  };

  return (
    <IconContext.Provider value={{ color: 'blue', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            )
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
}

export default Accordion;
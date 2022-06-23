import React from 'react'
import Heading from '../layout/Heading'
import { LoremIpsum } from 'react-lorem-ipsum';
import styled from 'styled-components';

const TextContainer = styled.div`
  width: 90%;
  max-width: 650px;
  margin: 0 auto;
`

function About() {
  return (
    <>
      <Heading title="About"/>
      <TextContainer>
        <LoremIpsum p={2} />
      </TextContainer>
    </>
  )
}

export default About
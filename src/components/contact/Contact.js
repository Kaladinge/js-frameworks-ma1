import React from 'react'
import Heading from '../layout/Heading'
import Contactform from './Contactform'
import styled from 'styled-components'

const TextContainer = styled.div`
  width: 90%;
  max-width: 650px;
  margin: 0 auto;
`

const SubHeading = styled.h4`
  color: ${function(props) {
    return props.theme.tertiaryColor;
  }};
  margin-top: 40px;
`

function Contact() {
  return (
    <div>
      <Heading title="Contact"/>
      <TextContainer>
        <SubHeading>Kermit the Frog street 3</SubHeading>
        <Contactform />
      </TextContainer>
    </div>
  )
}

export default Contact
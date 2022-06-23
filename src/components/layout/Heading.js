import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.h1`
  color: ${function(props) {
    return props.theme.secondaryColor;
  }};
  text-align: center;
  margin: 40px 0;
`

function Heading(props) {
  return (
    <MainHeader>{props.title}</MainHeader>
  )
}

export default Heading
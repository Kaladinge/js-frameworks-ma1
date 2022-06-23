import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  position: absolute;
  top: 38%;
  font-size: 70px;
  color: green;
  cursor: pointer;
  color: ${function(props) {
    return props.theme.attentionColor;
  }};
`

function CarouselButton(props) {
  return (
    <Button style={props.style} onClick={props.click}>{props.sign}</Button>
  )
}

export default CarouselButton
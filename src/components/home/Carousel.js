import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  
  height: 600px;
  object-fit: cover;
  object-position: 50% 10%;
  border-radius: 30px;
  margin: 0;
`

function Carousel({description, style}) {
  return (
    <Image src={`../../images/${description.img}`} alt={description.alt} style={style}/>
  )
}

export default Carousel
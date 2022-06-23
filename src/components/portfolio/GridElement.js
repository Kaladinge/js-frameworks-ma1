import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  margin: 0;
  border-radius: 30px;
  width: 300px;
  height: 400px;
  object-fit: cover;
`

function GridElement(props) {
  return (
    <div>
        <Image src={`../../images/${props.data.img}`} alt={props.data.alt}/>
        <figcaption>{props.data.caption}</figcaption>
    </div>
  )
}

export default GridElement
import React from 'react'
import Heading from '../layout/Heading'
import Data from "../../data/Data"
import Image from "./GridElement"
import styled from 'styled-components'

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  text-align: center;
`

const pictures = Data.map(function(data) {
  return (<Image key={data.id} data={data}/>)
})


function Portfolio() {
  return (
    <>
      <Heading title="Portfolio"/>
      <PortfolioContainer>
        {pictures}
      </PortfolioContainer>
    </>
  )
}

export default Portfolio
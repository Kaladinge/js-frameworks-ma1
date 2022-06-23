import React from 'react'
import Heading from '../layout/Heading'
import Data from '../../data/Data'
import Carousel from './Carousel';
import styled from 'styled-components';
import CarouselButton from './CarouselButton';

const CarouselContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  gap: 20px;
  @media only screen and (max-width: 599px) {
    display: none;
  };
`

const SmallCarouselContainer = styled(CarouselContainer)`
  display: flex;
  width: 100%;
  @media only screen and (min-width: 600px) {
    display: none;
  };
`

function Home() {

  const [index, setData] = React.useState(0);
  const [mobileIndex, setMobileIndex] = React. useState(0);

  const carouselArray = [Data[index], Data[index + 1]]
  const mobileCarouselArray = [Data[mobileIndex]]

  const carousel = carouselArray.map(item => <Carousel key={item.id} description={item} style={{width: "50%"}}/>)
  const mobileCarousel = mobileCarouselArray.map(item => <Carousel key={item.id} description={item} style={{width: "75%"}}/>)

  function prevState() {
     setData((index => index - 2))
  }

  function nextState() {
    setData((index => index + 2))
  }

  function prevStateMobile() {
     setMobileIndex((index => index - 1))
  }

  function nextStateMobile() {
    setMobileIndex((index => index + 1))
  }

  return (
    <div>
      <Heading title="Home"/>
      <CarouselContainer>
        <CarouselButton style={{display: index === 0 ? "none" : "block", left: -70}} click={prevState} sign="&#8592;"/>
          {carousel}
        <CarouselButton style={{display: index + 1 === Data.length - 1 ? "none" : "block", right: -70}} click={nextState} sign="&#8594;"/>
      </CarouselContainer>

      <SmallCarouselContainer>
        <CarouselButton style={{display: mobileIndex === 0 ? "none" : "block", left: 2}} click={prevStateMobile} sign="&lt;"/>
          {mobileCarousel}
        <CarouselButton style={{display: mobileIndex === Data.length - 1 ? "none" : "block", right: 2}} click={nextStateMobile} sign="&gt;"/>
      </SmallCarouselContainer>
    </div>
  )
}

export default Home
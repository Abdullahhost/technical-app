import React from 'react'

import HeroSlider, { Overlay, Slide } from "hero-slider";
import { useSelector } from 'react-redux';

const ProductSlider = () => {

  const openSlider = useSelector(state => state.modal.openSlider)
   
  const bogliasco = "images/beamPlate.webp";
  const countyClare = "images/boomLift.jpg";
  const craterRock = "images/copper.jpg";
  const giauPass = "images/airCompressure.png";

  return (
    <>
    { openSlider && <div>
      <HeroSlider
      
      height={"50vh"}
      width={'100%'}
      autoplay
      
      controller={{
        
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
        console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
        console.debug(
          "onBeforeSliding(previousSlide, nextSlide): ",
          previousSlide,
          nextSlide
          ),
          onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
        }}
        
        animations={{
          slidingAnimation: 'fade'
        }}
        
        >
      <Overlay>
      <div style={{width: '100%', height: '100%', padding: '20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
         <h2 style={{display: 'inline-block', background: '#0004', color: '#fff', padding: '1rem'}}>Product Slider</h2>
         </div>
         </Overlay>
         
         <Slide
         label="Giau Pass - Italy"
         background={{
           backgroundImageSrc: giauPass
          }}
          />
       
       <Slide
       label="Bogliasco - Italy"
       background={{
         backgroundImageSrc: bogliasco
        }}
        />

     <Slide
     label="County Clare - Ireland"
     background={{
       backgroundImageSrc: countyClare
      }}
      />
      
      <Slide
      label="Crater Rock, OR - United States"
      background={{
        backgroundImageSrc: craterRock
      }}
      />
  
     </HeroSlider>

     </div>
    }
      </>
     )
  }
    
    export default ProductSlider

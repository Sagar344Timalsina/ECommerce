import React, { useState, useEffect } from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import '../css/ImageSlideDot.css'

const ImageSlider = ({ slides }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIdx].urls})`
  };
  const sliderStyles = {
    height: "100%",
    position: "relative",

  }
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "20px",
    fonstSize: "145",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",

  }
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "20px",
    fonstSize: "45",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  }
  const dotContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    Color: "#c4c4c4"
  }
  const goToPrev = () => {
    const isFirstSlide = currentIdx === 0
    const newIndx = isFirstSlide ? slides.length - 1 : currentIdx - 1
    setCurrentIdx(newIndx)
  }
  const goToNext = () => {
    const isLastSlide = currentIdx === slides.length - 1
    const newIndx = isLastSlide ? 0 : currentIdx + 1
    setCurrentIdx(newIndx)
  }
  const goToSlides = (slideIndex) => {
    setCurrentIdx(slideIndex)
  }

  // function autoSlide(){
  //   goToNext()
  // }
  useEffect(() => {
    const interval = setInterval(() =>setCurrentIdx((prev)=>prev===slides.length-1?0:prev+1), 5000);
    return () => {
      clearInterval(interval);
    }
  }, [currentIdx,slides.length])



  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrev}><FaLessThan size={35} /></div>
      <div style={rightArrowStyles} onClick={goToNext}><FaGreaterThan size={35} /></div>
      <div style={slideStyles}></div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotStyles} className={`dotStyles${currentIdx === slideIndex ? " active" : ""}`} onClick={() => goToSlides(slideIndex)}><GoPrimitiveDot size={25} /></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
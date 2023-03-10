import React from 'react'
import ImageSlider from './ImageSlider'
import img1 from '../assets/images/blog.jpg'
import img4 from '../assets/images/PC4.jpg'
import img5 from '../assets/images/PC5.jpg'
import img6 from '../assets/images/PC6.jpg'
import img7 from '../assets/images/PC7.jpg'
import img8 from '../assets/images/PC8.jpg'

// import img2 from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F418060777914172846%2F&psig=AOvVaw1A3o6Cy0oSnpVnX1zeFsR9&ust=1677899060161000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCJ757jvv0CFQAAAAAdAAAAABAS'

const CarouselDiv = () => {
    const slides = [
        { urls: `${img1}`, title: 'PC1' },
        { urls: `${img4}`, title: 'PC4' },
        { urls: `${img5}`, title: 'PC5' },
        { urls: `${img6}`, title: 'PC6' },
        { urls: `${img7}`, title: 'PC7' },
        { urls: `${img8}`, title: 'PC8' },

    ];

    const containerStyles = {
        width: '60vw',
        height: '60vh',
        margin: 'auto'
    }

    return (
        <>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </>
    )
}

export default CarouselDiv;
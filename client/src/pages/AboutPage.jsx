import React from 'react'
import Layout from '../components/Layout'
import '../css/AboutUs.css'

const AboutPage = () => {
  return (
    <Layout title={"about-ecommerce"} >
    <div className='contact-main'>
      <div className='heading-about'>
        <h1 className='h1-text'>About us</h1>
      </div>
      <div className="child-about">
      <div className="left-about grid-items">
        <h4>What we do?</h4>
        <p>
          At our company, we will never give you the “hard sell”, or try to convince you
          to purchase something you don’t need. We value your patronage and always
          aim to provide a great shopping experience. You’re invited to call us, chat
          with us, or visit in person—we’re waiting to serve you. We’ll give you all
          the time you need to discuss your concerns and graciously welcome any
          request.
        </p>
      </div>
      <div className="mid-about grid-items">
        <h4>About Company</h4>
        <p>
          Established to provide top notch and genuine products in Nepali market in reasonable prices.
          We aim to be First and Fully Customized DIY PC builder’s in Nepali Market.
        </p>
      </div>
      <div className="right-about grid-items">
        <h4>We Hire True Know-How</h4>
        <p>
          We have photography, audio and video specialists as our salespeople.
          By hiring so many accomplished experts, we place years of industry
          experience and advice at your disposal.
        </p>
        <p>
          In addition to their own experience, Aliteq associates spend more
          than 25% of their working time in equipment trainings. So, that we
          can give you the best advice for the equipments you want.
        </p>
      </div>
      </div>
    </div>
  </Layout>
  )
}

export default AboutPage;
import React from 'react'
import Layout from '../components/Layout'
import Map from '../components/Map'
import '../css/Contact.css'

const ContactUsPage = () => {
  return (
   <Layout title={"contact-us ecommerce"}>
   <div className="main-contact">
    <div className="heading-contact">
      <h1>Contact Us</h1>
    </div>
    <div className="child-contact">
    <div className="left-contact">
      <h4>Get in Touch!!!</h4>
      <p>
        We are Happy to Serve you😊
      </p>
    </div>
    <div className="right-contact">
      <div className="map-contact " >
        <h4>This is a map</h4>
        <Map/>
      </div>
      <div className="address-contact">
        <p>
        Paknajol,Kathmandu,Nepal
        </p>
        <p>
        Support: (+977) 9868823245, (+977) 9804332381
        </p>
        <p>Email: letusknow@abc.com</p>
      </div>
    </div>
    </div>
   </div>
   </Layout>
  )
}

export default ContactUsPage
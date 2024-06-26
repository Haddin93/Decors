import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaBlenderPhone, FaFacebookF, FaPhoneAlt, FaPhoneSquareAlt } from 'react-icons/fa'
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Contact() {
  return (
    <div>
      <section className='contact_section py-lg-5 py-3' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="500">
        <Container>
            <h1 className='text-center text-white mb-lg-5 mb-3'>Contact Us</h1>
            <Row>
                <Col lg={6}>
                    <Row>
                        <Col md={6}>
                            <h2>Our Ambition</h2>
                            <p className='text-white mt-3'>The core of Shakthi Decor business model includes trusting partnerships and operating with only the expectation that our partners become successful.</p>
                            <p className='text-white'>We trust to do the right thing the first time, every time. We look forward to the opportunity to serve you.</p>
                        </Col>
                        <Col md={6}>
                            <h2 className='text-md-center'>Quick Links</h2>
                            <ul className='mt-3 text-md-center p-0'>
                                <li className='mb-3'><a href="">Home</a></li>
                                <li className='mb-3'><a href="">About</a></li>
                                <li className='mb-3'><a href="">Services</a></li>
                                <li className='mb-3'><a href="">Gallery</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                        <Row>
                        <Col md={6}>
                            <h2 className='text-md-center'>Locations</h2>
                            <ul className='mt-3 p-0'>
                                <li className='mb-3'><FaLocationDot className='text-white' /><a href="https://www.google.com/maps/place/Shakthi+Decor/@11.9354809,79.8100607,17z/data=!3m1!4b1!4m6!3m5!1s0x3a536176f74b5df7:0x20491712d919c3eb!8m2!3d11.9354757!4d79.8149316!16s%2Fg%2F11b7hsqqhc?entry=ttu" target='_blank'> 233,Thiruvalluvar Salai, Near Nellithope Signal, Pondicherry-605013</a></li>
                                <li className='mb-3'><FaBlenderPhone className='text-white' /> <a href="tel:04134900281"> (0413)-4900 281</a></li>
                                <li className='mb-3'><FaPhoneSquareAlt className='text-white' /> <a href="tel:9944808181">+91 994480 8181</a></li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h2 className='text-md-center'>Visit Us</h2>
                            <Image src={require("../assets/img/sd_logo.jpg")} className=" ms-md-auto me-md-auto d-md-block logo my-3" />
                            <div className='text-md-center mt-lg-5 mt-3'>
                                <a href="https://www.facebook.com/shakthi.decor.9?mibextid=ZbWKwL" className='me-2'><FaFacebookF className='con_icon' /></a>
                                <a href="" className='me-2'><FaXTwitter className='con_icon ' /></a>
                                <a href="tel:9944808181"><IoLogoWhatsapp className='con_icon' /></a>
                            </div>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

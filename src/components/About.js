import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function About() {
  return (
    <div className="about">
      <div className="about_img">
        <Image src={require("../assets/img/about.jpg")}></Image>
      </div>
      <Container className="about_sec py-5">
        <Row>
          <Col lg={6} className="align-self-center">
            <Image
              src={require("../assets/img/latestcurtain.jpeg")}
              id="image"
            />
          </Col>
          <Col lg={6}>
            <h1 className="heading">About us</h1>
            <p className="para">
              We proudly introduce ourself that we are into interior decoration
              service and related service. Offering our service in and around
              Pondicherry,South Arcot districts. Our main services include
              interior services viz,Curtains, Fiber mesh,PVC Balcony Blinds,PVC
              Cupboards,Door type netlon, Sofa Lining Work, interior designs. At
              Latest Interiors, we are not just an ordinary interior design
              company in Pondicherry, also we are visionaries, artisans, and
              dream weavers. We believe that a well-designed interior has the
              power to transform lives, shaping environments that inspire,
              invigorate, and reflect the essence of those who inhabit them. Our
              journey is one of passion, dedication, and a ceaseless pursuit of
              excellence. For us, each project is a unique canvas, and a
              symphony of aesthetics and functionality, meticulously curated to
              tell a compelling story of luxury and artistry. Discover the
              epitome of interior design in Pondicherry – explore Latest
              Interiors today.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <div className="about" style={{backgroundImage: `url(${require("../assets/img/about.jpg")})`, backgroundSize: 'cover'}}> */}
      {/* <div  className="back" style={{display:'flex',justifyContent:'space-between'}}>
              <div >
                  <Image
                    src={require("../assets/img/latestinteriors.jpg")}
                     id="image"
                  />
                </div>

                <div className="latest">
                  <h1>Journey of becoming the best designer in Delhi</h1>
                  <p>
                    At Latest Interiors, we are not just an ordinary interior design
                    company in Delhi; we are visionaries, artisans, and dream weavers.
                    We believe that a well-designed interior has the power to
                    transform lives, shaping environments that inspire, invigorate,
                    and reflect the essence of those who inhabit them. As the pinnacle
                    of interior design in Delhi, we hold ourselves to the highest
                    standards of creativity, craftsmanship, and innovation. Our
                    journey is one of passion, dedication, and a ceaseless pursuit of
                    excellence. For us, each project is a unique canvas, a symphony of
                    aesthetics and functionality, meticulously curated to tell a
                    compelling story of luxury and artistry. Being the best interior
                    designers in Delhi NCR, we invite you to explore the
                    extraordinary, to venture beyond the ordinary, and to embark on a
                    voyage that transcends conventional design. Latest Interiors is
                    where your dream home takes shape with unmatched elegance.
                    Discover the epitome of interior design in Delhi – explore Latest
                    Interiors today.
                  </p>
                  </div>
           </div>            */}
    </div>
  );
}

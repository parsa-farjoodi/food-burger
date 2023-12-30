import React from 'react'
import "./Banner.css"
import { Container, Row, Col } from 'react-bootstrap'

export default function Banner() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div className='banner' style={{ backgroundImage: "url(/img/banner.webp)" }}>
                        <div className='bannerDetail'>
                            <div className='bannerLogo'>
                                <img src='./img/banner2.svg' />
                            </div>
                            <div className='detail'>
                                <div>
                                    <h3>DELIVERY</h3>
                                </div>
                                <div className='explaination'>
                                    <p>We’re proud to have our burger’s history
                                        being as long as 25 years!
                                    </p>
                                </div>
                                <div>
                                    <button className='order'>ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

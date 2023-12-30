import React from 'react'
import "./SecondBanner.css"
import { Container, Row, Col } from 'react-bootstrap'

export default function SecondBanner() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='secondBanner'>
                        <a href='#'>
                            <div className='bannerItem1'>
                                <figure className='secondBanner1'>
                                    <a href='#'>
                                        <img src='./img/secondbanner1.webp' />
                                    </a>
                                    <figcaption>
                                        <h4>HOURSE</h4>
                                        <span>Mon - Fri 1 P.M - 3 P.M</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </a>
                        <a href='#'>
                            <div className='bannerItem2'>
                                <figure className='secondBanner1'>
                                    <a href='#'>
                                        <img src='./img/secondbanner2.webp' />
                                    </a>
                                    <figcaption>
                                        <h4>SPECIAL OFFER</h4>
                                        <h3>BUY 2 GET 3</h3>
                                        <span>Use Our Special Offer Quickly!</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </a>
                        <a href='#'>
                            <div className='bannerItem3'>
                                <figure className='secondBanner1'>
                                    <a href='#'>
                                        <img src='./img/secondbanner3.webp' />
                                    </a>
                                    <figcaption>
                                        <h4>FAST DELIVERY</h4>
                                    </figcaption>
                                </figure>
                            </div>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

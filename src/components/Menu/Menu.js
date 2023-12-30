import React from 'react'
import './Menu.css'
import { Container, Row, Col } from 'react-bootstrap'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export default function Menu() {
    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='mainMenu'>
                        <div className='menu'>
                            <ul>
                                <li className='active'>HOME</li>
                                <li>ABOUT</li>
                                <li>FOOD</li>
                                <li>DELIVERY</li>
                                <li>CONTACT</li>
                            </ul>
                        </div>
                        <div className='medias'>
                            <div>
                                <FacebookIcon className='facebookIcon' />
                                <InstagramIcon className='instagramIcon' />
                                <LocalPizzaIcon className='pizzaIcon' />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className='callAndLocation'>
                        <div className='call'>
                            <div className='callIcon'>
                                <CallIcon id='call' />
                            </div>
                            <div className='callNumber'>
                                <a href='#'>
                                    <h3 style={{ fontSize: "15px", fontWeight: "400" }}> 021 2215 7273</h3>
                                </a>
                            </div>
                        </div>
                        <div className='mainLogo'>
                            <a href='#'>
                                <img src='./img/logo-df.svg' />
                            </a>
                        </div>
                        <div className='location'>
                            <div className='locationIcon'>
                                <LocationOnIcon id='location' />
                            </div>
                            <div>
                                <h3 style={{ fontSize: "15px", color: "rgb(104, 104, 104)", fontWeight: "400" }}> Valiasr Street, Vanak Square</h3>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

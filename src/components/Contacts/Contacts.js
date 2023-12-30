import React from 'react'
import "./Contacts.css"
import { Container, Row, Col } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contacts() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='contactsContainer'>
                        <div className='contact'>
                            <div className='signUpTitle'>
                                <h3>SIGN UP FOR OUR UPDATE</h3>
                            </div>
                            <div className='signUpDescription'>
                                <p>To stay up-to-date on our promotions,
                                    discounts, sales, special offers and more.
                                </p>
                            </div>
                            <div className='signUpInput'>
                                <input type='email' placeholder='Enter your email' />
                            </div>
                            <div className='signUpIcon'>
                                <FacebookIcon className='facebookIcon' />
                                <InstagramIcon className='instagramIcon' />
                                <LocalPizzaIcon className='pizzaIcon' />
                            </div>
                        </div>
                        <div className='contact'>
                            <div className='contactTitle' style={{ marginLeft: "18px", marginTop: "11px" }}>
                                <h3>CONTACT US</h3>
                            </div>
                            <div className='comunications'>
                                <div className='locationContainer'>
                                    <div><LocationOnIcon className='locationIcon' /></div>
                                    <div className='location'><p>Iran, Tehran, Valiasr Street, Vanak Square</p></div>
                                </div>
                                <div className='phoneContainer'>
                                    <div><PhoneEnabledIcon className='phoneIcon' /></div>
                                    <div className='phone'><p>021 2215 7273</p></div>
                                </div>
                                <div className='timeContainer'>
                                    <div><AccessTimeIcon className='timeIcon' /></div>
                                    <div className='time'><p>Monday-Friday: 9:00 am - 6:00 pm
                                        Saturday: 9:00 am - 4:00 pm</p></div>
                                </div>
                                <div className='mailContainer'>
                                    <div><MailOutlineIcon className='mailIcon' /></div>
                                    <div className='mail'><p>Send us an email</p></div>
                                </div>
                            </div>
                        </div>
                        <div className='contact'>
                            <div className='contactTitle' style={{ marginLeft: "50px", marginTop: "-8px" }}>
                                <h3>INSTAGRAM</h3>
                            </div>
                            <div className='instagramPhotos'>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food5.webp' /></a>
                                </div>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food15.webp' /></a>
                                </div>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food8.webp' /></a>
                                </div>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food2.webp' /></a>
                                </div>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food11.webp' /></a>
                                </div>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food6.webp' /></a>
                                </div>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food12.webp' /></a>
                                </div>
                                <div className='photo'>
                                    <a href='#'><img src='./img/food7.webp' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

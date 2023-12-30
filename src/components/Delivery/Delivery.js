import React from 'react'
import "./Delivery.css"
import { Container, Row, Col } from 'react-bootstrap'
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export default function Delivery() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='delivery'>
                        <div className='deliveryContainer'>
                            <div className='deliverySteps'>
                                <div className='deliveryImage'>
                                    <img src='./img/delivery.webp' />
                                </div>
                                <div className='deliveryTitle'>
                                    <div className='step'><h2>1</h2></div>
                                    <div><h3>CHOOSE</h3></div>
                                    <div><LunchDiningOutlinedIcon className='chooseIcon' /></div>
                                </div>
                                <div className='deliveryExplaination'>
                                    <div>
                                        <p>Select food, which you want now the most and don’t forget about drinks</p>
                                    </div>
                                </div>
                            </div>
                            <div className='deliverySteps'>
                                <div className='deliveryTitle'>
                                    <div className='step'><h2>2</h2></div>
                                    <div><h3>MAKE AN ORDER</h3></div>
                                    <div><SoupKitchenOutlinedIcon className='orderIcon' style={{marginLeft:"8px"}}/></div>
                                </div>
                                <div className='deliveryExplaination'>
                                    <div>
                                        <p>Contact us and provide our agent with correct information about your order</p>
                                    </div>
                                </div>
                                <div className='deliveryImage'>
                                    <img src='./img/delivery2.webp' />
                                </div>
                            </div>
                            <div className='deliverySteps'>
                                <div className='deliveryImage'>
                                    <img src='./img/delivery3.webp' />
                                </div>
                                <div className='deliveryTitle'>
                                    <div className='step'><h2>3</h2></div>
                                    <div><h3>RECEIVE</h3></div>
                                    <div><LocalShippingOutlinedIcon className='deliveryIcon' /></div>
                                </div>
                                <div className='deliveryExplaination'>
                                    <div>
                                        <p>Get your order as quickly as possible and enjoy your meal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

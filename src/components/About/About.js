import React from 'react'
import "./About.css"
import { Container, Row, Col } from 'react-bootstrap'
import StarRateIcon from '@mui/icons-material/StarRate';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PaidIcon from '@mui/icons-material/Paid';

export default function About() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className='aboutSection'>
            <div className='about1'>
              <div className='about1Image'>
                <img src='./img/about1.webp' />
              </div>
              <div className='about1Detail'>
                <div className='about1DetailTitle'>
                  <h2>BEST PRISE ALWAYS</h2>
                </div>
                <div className='about1Star'>
                  <StarRateIcon className='starIcon' />
                  <StarRateIcon className='starIcon' />
                  <StarRateIcon className='starIcon' />
                </div>
                <div className='about1Explaination'>
                  <p>The perfect place to enjoy the life & delicious food with your
                    friends! Our family has been in the restaurant business for a very
                    long time. Nowadays we can proudly boast our reputation for a
                    well known restaurant in our area. We are famous for the fabulous
                    authentic cuisine, professional chef and dedicated staff….
                  </p>
                </div>
                <div className='about1Options'>
                  <div className='option'>
                    <div className='optionIcon'>
                      <LunchDiningIcon style={{ fontSize: "40px", color: "rgb(133, 132, 132)" }} />
                    </div>
                    <span>GOOD FOOD</span>
                  </div>
                  <div className='option'>
                    <div className='optionIcon'>
                      <DeliveryDiningIcon style={{ fontSize: "40px", color: "rgb(133, 132, 132)" }} />
                    </div>
                    <span>FAST DELIVERY</span>
                  </div>
                  <div className='option'>
                    <div className='optionIcon'>
                      <PaidIcon style={{ fontSize: "40px", color: "rgb(133, 132, 132)" }} />
                    </div>
                    <span>NICE PRICE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='about2Section'>
            <div className='about2'>
              <div className='about2Price'>
                <span style={{ lineHeight: "3", fontSize: "18px", fontWeight: "500" }}>From</span>
                <h4 style={{ fontSize: "40px", fontWeight: "400", color: "rgb(223, 164, 4)" }}>17</h4><p>$</p>
              </div>
              <div className='about2Title'>
                <h2>BEEF BURGERS</h2>
              </div>
              <div className='about2Explanation'>
                <p>Try this delicious burger containing of two fried parts of a whole-grain bun, a juicy piece of beef, cheese and lettuce
                </p>
              </div>
              <div className='about2Image'>
                <img src='./img/about2.webp' />
              </div>
            </div>
            <hr className='aboutLine' />
            <div className='about2'>
              <div className='about2Image'>
                <img src='./img/about3.webp' />
              </div>
              <div className='about2Price'>
                <span>From</span>
                <h4>12.00</h4><p>$</p>
              </div>
              <div className='about2Title'>
                <h2>THE BEST PASTA</h2>
              </div>
              <div className='about2Explanation'>
                <p>Our pasta with seafood is mixed perfectly with a glass of white wine!
                </p>
              </div>
            </div>
            <hr className='aboutLine' />
            <div className='about2'>
              <div className='about2Price'>
                <span>From</span>
                <h4>13.50</h4><p>$</p>
              </div>
              <div className='about2Title'>
                <h2>SEASON SOUP</h2>
              </div>
              <div className='about2Explanation'>
                <p>We offer you a special dish – our season soup containing season vegetables.
                </p>
              </div>
              <div className='about2Image'>
                <img src='./img/about4.webp' />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

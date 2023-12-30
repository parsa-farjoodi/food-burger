import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Location() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1348.6412297285992!2d51.41070862389848!3d35.758543369216426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1702601689139!5m2!1sfa!2s" style={{width:"100%",height:"400px"}}></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import phone from "../images/phone.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{ }}>
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col xs="6" className="d-flex align-items-center ">
                        
                        <div className="footer-shroot mx-2">All Rights Reserved 2022 &copy; Abdelrahman Yasser</div>
                        
                    </Col>
                    <Col
                        xs="6"
                        className="d-flex justify-content-end align-items-center ">
                        <div className="d-flex pt-3 mx-2">
                            <img  width="20px" height="20px" src={phone} alt="" />
                            <p className="mx-2 footer-phone">01099659544</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                        <img width="20px" height="20px" src={facebook} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={instagram} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={twitter} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
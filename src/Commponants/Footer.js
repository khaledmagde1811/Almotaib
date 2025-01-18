        import React from 'react';
        import { Container, Row, Col } from 'react-bootstrap';
        import { FaFacebook, FaTwitter, FaInstagram, FaPhone ,FaMapMarkerAlt,FaWhatsapp } from 'react-icons/fa';
        
        import './Footer.css';

        const Footer = () => {
        return (
            <div className="footer-background footer mt- pt-2">
            <Container>
            <Row className="d-flex justify-content-between align-items-center">
                <Col sm="6" className="d-flex flex-column align-items-start">
                <div className="footer-link">الشروط والأحكام</div>
                <div className="footer-link mx-2">سياسة الخصوصية</div>
                <div className="footer-link mx-2">اتصل بنا</div>
                </Col>
                <Col sm="6" className="d-flex justify-content-end align-items-center">
                <div className="d-flex align-items-center mx-2">
                    <FaPhone className="footer-icon" />
                    <p className="footer-phone mx-2">01117379661</p>
                </div>
                <div className="mx-2">
                    <a href='https://maps.app.goo.gl/pQ4uKqdDMzNru3sh8'><FaMapMarkerAlt className="footer-icon" /></a>
                </div>
                <div className="mx-2">
                   <a href='https://www.facebook.com/profile.php?id=61556518981136' target='_blank'><FaFacebook className="footer-icon" /></a> 
                </div>
                <div className="mx-2">
                   <a href='https://wa.me/201207770460' target='_blank' ><FaWhatsapp className="footer-icon" /></a> 
                </div>
                </Col>
            </Row> 
            </Container>
        </div>
    
        );
        };

        export default Footer;
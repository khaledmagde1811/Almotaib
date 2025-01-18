import React from 'react'
import "./Paner.css" ;
import Panar from '../assets/—Pngtree—the kaaba of mecca with_2707448.jpg'
import { Container } from 'react-bootstrap';
const CecoundPaner = () => {
  return (
    <div>
          <div className="home-section" id='WhereWeAre'>
        <img 
            src={Panar} 
            alt="Home Banner" 
            className="home-image" 
        />
        <div className="overlay">
            <Container className="text-center">
            <a href='https://maps.app.goo.gl/pQ4uKqdDMzNru3sh8' target='_blank' className='no-underline text-amber-200 '><h1> أين تجدنا؟</h1> </a>
            <h3 > شركه المطيب تتمني لكم حج مقبول وذننب مغفور ان شاء الله</h3>            
            </Container>
        </div>
        </div>
    </div>
  )
}

export default CecoundPaner

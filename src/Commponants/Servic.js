import React from 'react'
import CardeServicecard from './CardeServicecard'
import bus from '../assets/—Pngtree—3d render of a realistic_6937511.jpg'
import plan from '../assets/DALL·E 2025-01-03 23.31.36 - A highly detailed and realistic image of a modern airplane flying high above the clouds during a clear day. The airplane is sleek and white, reflectin.webp'
import pasport from '../assets/493244c836e5bffd244f54fa7412247c.jpg'
import { Container } from 'react-bootstrap'
import './Card.css'
const Servic = () => {
  return (
    <div className='contaier ' id='Servic'>
      <Container className='Carcon flex space-x-4'>
      <CardeServicecard  img={bus} Titele={'رحلات بريه'} />
      <CardeServicecard  img={plan}    Titele={'رحلات جوية'} />
      <CardeServicecard  img ={pasport} Titele={'جوازات سفر'}  />
      </Container>
    </div>
  )
}

export default Servic

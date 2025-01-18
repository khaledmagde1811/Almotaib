import React from 'react';
import './Carda.css';

const CardeServicecard = ({ img, Titele, P, time }) => {
  return (
    <div className='container'>
      <div className='w-80 p-2 card'>
        <img src={img} alt='car' className='h-60 bg-cover' />
        <hr />
        <div className='h-44 bg-white my-2'>
          <h2 className='font-bold float-right'>{Titele}</h2>
          <p className='font-bold float-right'>{P}</p>
          <p className='font-bold float-right'>{time}</p>
        </div>
        <a href='https://wa.me/201207770460'target='_blank' className=' bg-yellow-300 text-center text-lg no-underline text-black font-bold rounded'>للتواصل</a> 
      </div>
    </div>
  );
};

export default CardeServicecard;

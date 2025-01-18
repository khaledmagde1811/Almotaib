import React from 'react'
import './About.css'

const About = () => {
  return (
   <>
   <div className="background-gradient bg-gradient-to-r from-sky-500 to-indigo-500 h-64  "id='AboutUs' >
    <div className='background-gradient bg-gradient-to-r from-gray-900 to-blue-900 w-full  container text-center  h-60 rounded-lg mt-6'>
    <h1 className='font-bold mb-8 text-orange-300 '> شركه المطيب للسياحه</h1>
    <p className='font-bold  text-white '> نحن شركه متخصصه في مجال السياحه الداخليه والخارجيه </p>
    <p className='font-bold  text-white'> ورحلات الحج و العمره</p>
    <p className='font-bold  text-white'> واستخراج التأشيرات</p>
    <p className='font-bold  text-white'> في اسرع وقت و اقل التكاليف</p>
    </div>
   </div>
   </>
    
  )
}

export default About

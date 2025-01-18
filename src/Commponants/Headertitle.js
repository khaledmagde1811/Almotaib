import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import './About.css'
const Headertitle = () => {
  return (
    <div className=' flex place-content-between bg-sky-600 text-slate-300 h-12' >
        <div className='tit flex-none h-14 ...  flex justify-items-center text-3xl m-2 my-2 w-40'>
            <a target="_blank" href='https://www.facebook.com/profile.php?id=61556518981136  ' className='text-blue-900' ><FaFacebookSquare /> </a>
            
            <a href=''> <FaInstagram className='text-red-400'/> </a>
        </div>
        <div className=' flex flex-none w-18 h-14 ... m-2 my-2'>
            <span className='flex'><FaPhone style={{ fontSize:'20'}}/>+201117379661</span>
            <span className='flex'><BiLogoGmail style={{ fontSize:'24'}}/>kelshaar3@gmail.com</span>
            
        </div>
    </div>
  )
}

export default Headertitle
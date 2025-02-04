import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-2'>
        < motion.h1 
        whileInView={{ opacity:1, x:0}}
        initial={{ opacity:0, x: -100}}
        transition={{duration:1 }}
        className='my-10 text-center text-4xl font-bold'>Get in Touch</motion.h1>
        <div className='text-center tracking-tight'>
            {/* <p className='my-4'>{CONTACT.address}</p> */}
            {/* <p className='my-4'>{CONTACT.phoneNo}</p> */}
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
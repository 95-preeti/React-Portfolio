import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaHtml5 } from 'react-icons/fa';
import { RiTailwindCssLine } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';
import {  motion } from 'framer-motion';

const iconVariants = (duration) => ({
   initial:{ y: -10},
   animate:{
      y: [10,-10],
      transition: {
         duration:duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse",
      }
   },
});

const Skill = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
       <motion.h1 
       whileInView={{ opacity:1, x:0 }}
       initial={{ opacity:0, x: -100}}
       transition={{ duration: 1.5}}
       className='my-20 text-center text-4xl font-bold'>Skill</motion.h1>
       <motion.div
       whileInView={{ opacity:1, x:0 }}
       initial={{ opacity:0, x: -100}}
       transition={{ duration: 1.5}}
       className='flex flex-wrap items-center justify-center gap-4'>
         <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>

            <RiReactjsLine className='text-6xl text-cyan-400' />
         </motion.div>
         <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandJavascript className='text-6xl text-yellow-400' />
         </motion.div>
         <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className='text-6xl text-red-400' />
         </motion.div>
         <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiTailwindCssLine className='text-6xl text-cyan-400' />
         </motion.div>
         <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiRedux className='text-7xl text-blue-800' />
         </motion.div>

       </motion.div>
    </div>
  )
}

export default Skill
"use client"
import React from 'react'
import { motion } from "framer-motion"
import profilePic from '@public/image.jpg'
import aboutUs from '../public/aboutUs.png'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}
    className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full
    px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            О нас
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        src={aboutUs.src}
        alt='user picture'
        className='mt-24 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
        rounded-full object-cover md:rounded-lg 
        xl:w-[400px] xl:h-[400px] '
        />
        <div className='space-y-3 px-0 md:px-10'>
            <h4 className='text-xl font-semibold '>
                Кто <span className=' underline decoration-[#0000ff]/50'>
                мы</span>{" "}?
            </h4>
            <p className='text-base'>
            <span className=' underline decoration-[#0000ff]/50'>DIVAR</span> - команда студентов-второкурсников из Уфы (УУНиТ), успешно выступающая на хакатонах на протяжении 1,5 лет.
            </p>
        </div>
        

        
    </motion.div>
  )
}

export default About
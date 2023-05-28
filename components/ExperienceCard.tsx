"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    img_src: string,
    name: string,
    role: string,
    skills: string
}

export default function ExperienceCard({img_src, name, role, skills}: any) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[250px] md:w-[350px] xl:w-[550px] snap-center bg-[#292929 p-10] hover:opacity-100
        opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden px-1'>
            {/*w-[500px] md:w-[600px] xl:w-[900px]*/}
            <motion.img
            initial={{ 
                y: -100,
                opacity: 0 
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
                opacity: 1,
            y: 0
            }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full object-cover object-center' 
                src={img_src}
                alt={name}
            />

            <div className='px-0 md:px-10'>
                <h4 className='uppercase text-sm sm:text-3xl font-light first-letter:text-5xl first-letter:text-blue-600 first-letter:pr-1'>{name}</h4>
                <p className='uppercase font-bold text-sm sm:text-xl mt-1'>{role}</p>
                <div className='flex space-x-2 my-2'>
                </div>
                <p className='uppercase py-5 text-sm sm:text-gray-300'>
                    <b>Навыки:</b> {skills}
                </p>
            </div>
        </article>
    )
}
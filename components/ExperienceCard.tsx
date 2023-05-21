"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    img_src: string,
    name: string,
    role: string,
    skills: string
}

export default function ExperienceCard({img_src, name, role, skills}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929 p-10] hover:opacity-100
        opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
                <h4 className='uppercase text-3xl font-light first-letter:text-5xl first-letter:text-blue-600 first-letter:pr-1'>{name}</h4>
                <p className='uppercase font-bold text-xl mt-1'>{role}</p>
                <div className='flex space-x-2 my-2'>
                    {/* <img 
                    className='h-10 w-10 rounded-full'
                    src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                    alt=""
                    />
                    <img 
                    className='h-10 w-10 rounded-full'
                    src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                    alt=""
                    />
                    <img 
                    className='h-10 w-10 rounded-full'
                    src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                    alt=""
                    />                                         */}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    <b>Навыки:</b> {skills}
                </p>
            </div>
        </article>
    )
}
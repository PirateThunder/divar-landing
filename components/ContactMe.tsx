"use client"
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Projects from './Projects'
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link'

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};


function ContactMe({}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = 'mailto:test@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})' ;
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center'>
        
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
            text-2xl '>
                Связь
            </h3>
        
        <div className='flex flex-col space-y-6 '>
            {/* <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='underline decoration-[#F&AB01]/50'>Let's Talk.</span>
            </h4> */}

            <div className='space-y-8 mt-10 md:mt-20 l:mt-20 xl:mt-20 '>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#0000ff] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'><a href="tel:+79279640174">+79279640174</a></p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#0000ff] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>divarteam@gmail.com (?)</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#0000ff] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Россия, Уфа</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <a href="https://t.me/arpakit" target="_blank" className='text-xl'>Telegram</a>
                </div>

            </div>



            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1 w-fit mx-auto '>
                <div className='flex space-x-1'>
                    <input {...register('name')}
                    placeholder=' Имя'
                    className='contactInput' type="text"
                    />
                    <input {...register('email')}
                    placeholder=' Email'
                    className='contactInput' type="email"
                    />
                </div>

                <input {...register('subject')} placeholder=' Тема' className='contactInput2' type="text" />
                
                <textarea {...register('message')} placeholder=' Сообщение' className='contactInput2'/>
                <button
                type='submit'
                className='bg-[#0000ff] py-3 px-10 rounded-md
                text-black font-bold text-lg'>
                    Отправить
                </button>
            </form>
            </div>




   </div>
  )
}

export default ContactMe
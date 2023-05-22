"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
// import profilePic from '../public/image.jpg'
import DIVAR_avatar from '../public/DIVAR_avatar.png'
import Link from 'next/link'


type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Верстаем Frontend',
      'Создаём Backend',
      'Проектируем БД',
      'Пишем приложения',
      'Подключаем ботов',
    ],
    loop: true,
    delaySpeed: 2000,
  })


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>

      <Image
        className='relative rounded-full h-40 w-40 mx-auto object-cover '
        src={DIVAR_avatar}
        alt='user profile picture'
      />
      
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[11px]'>Команда DIVAR</h2>

        <h1 className='text-xl lg:text-6xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#0000FF'/>
        </h1>

        <div className='pt-5 '>
          <a href='#about'>
            <button className='px-6 py-2 border border-[#363636] rounded-full uppercase text-xs
    tracking-widest text-white transition-all hover:border-[#0000ff]
    hover:text-[#0000ff]'>О нас</button>
          </a>
          <a href='#experience'>
            <button className='px-6 py-2 border border-[#363636] rounded-full uppercase text-xs
    tracking-widest text-white transition-all hover:border-[#0000ff]
    hover:text-[#0000ff]'>Команда</button>
          </a>
          {/* <a href='#skills'>
            <button className='px-6 py-2 border border-[#363636] rounded-full uppercase text-xs
    tracking-widest text-white transition-all hover:border-[#0000ff]
    hover:text-[#0000ff]'>Скиллы</button>
          </a> */}
          <a href='#projects'>
            <button className='px-6 py-2 border border-[#363636] rounded-full uppercase text-xs
    tracking-widest text-white transition-all hover:border-[#0000ff]
    hover:text-[#0000ff]'>Хакатоны</button>
          </a>
          <a href='#contact'>
            <button className='px-6 py-2 border border-[#363636] rounded-full uppercase text-xs
    tracking-widest text-white transition-all hover:border-[#0000ff]
    hover:text-[#0000ff]'>Связь</button>
          </a>
          
        </div>
      </div>
    </div>
  )
}
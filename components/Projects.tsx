"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

import intro1 from "../public/hacks/2023-fsp-voronezh/intro.jpg"

import intro2 from "../public/hacks/2021-leadersofdigital-lifetech/intro.jpg"

import intro3 from "../public/hacks/2023-youthbit-onboarding/intro.jpg"



type Props = {}

function Projects({}: Props) {

  const projects = [1, 2, 3, 4, 5];

  return (
<div className="h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center z-0 pr-3">

  <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
      text-2xl'>
        Хакатоны
  </h3>

  <div className='container'>

  <ul className="cards">
    <li className="card">
      <div>
        <h3 className="card-title">Всероссийские соревнования по спортивному программированию среди студентов (ФСП, Воронеж, 2023) - <b>1 место</b></h3>
        <img src={intro1.src} alt=""/>
        <div className="card-content">
          <p>Сайт: <a href="https://xn--80ahdaaq8abb3aue6j.xn--p1ai/" target='_blank'>деньинтернета.рф</a></p>
          <p>Результаты: <a href="https://fsp-russia.com/blog/news-20/" target='_blank'>https://fsp-russia.com/blog/news-20/</a> (продуктовое)</p>
        </div>
      </div>
      {/* <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div> */}
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Цифровой прорыв (Lifetech, Соцзащита, 2021) - <b>1 место</b></h3>
        <img src={intro2.src} alt=""/>
        <div className="card-content">
          <p>Сайт: <a href="https://leadersofdigital.ru/event/63010/case/919927" target='_blank'>https://leadersofdigital.ru/event/63010/case/919927</a></p>
          <p>Результаты: <a href="https://leadersofdigital.ru/event/63010/case/919927/results" target='_blank'>https://leadersofdigital.ru/event/63010/case/919927/results</a></p>
        </div>
      </div>
      {/* <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div> */}
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Молодёжный бит (Росмолодёжь, Онбординг, 2023) - <b>4 место</b></h3>
        <img src={intro3.src} alt=""/>
        <div className="card-content">
          <p>Сайт: <a href="https://youthbit.ru/" target='_blank'>https://youthbit.ru/</a></p>
          <p>Результаты: <a href="https://youthbit.ru/shortlist.html" target='_blank'>https://youthbit.ru/shortlist.html</a> (кликнуть на "Онбординг")</p>
        </div>
      </div>
      {/* <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div> */}
    </li>
  </ul>
  
</div>
</div>
  )
}

export default Projects
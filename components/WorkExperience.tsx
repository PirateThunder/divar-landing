"use client"
import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

import Denis from "../public/Denis.jpg"
import Ilya from "../public/Ilya.jpg"
import Vanya from "../public/Vanya.jpg"
import Arsen from "../public/Arsen.jpg"
import Rustam from "../public/Rustam.jpg"

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{opacity: 1}}
      className='h-screen relative flex overflow-hidden flex-col text-center md:text-left xl:text-left
      max-w-full justify-evenly mx-auto items-center z-0'>
<div className="h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center z-0 pr-3">

  <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
      text-2xl'>
        Команда
  </h3>

  <div className='container'>

  <ul className="cards">
    {/* ml 20 */}
    <ExperienceCard style={{marginLeft: 20}} img_src={Denis.src} name="Денис Шайхльбарин" 
      role="Android Developer, UI/UX Designer" 
      skills="Java, Kotlin, Android, Dart, Flutter, Android Jetpack (Navigation, Composed, Hilt, Room etc.), AirBnB Epoxy, Glide, RxJava 2, RxAndroid, RxKotlin, Kotlin Coroutines, Ktor, Gradle, Maven, OkHttp 3, Retrofit 2, MVVM, MVI, MVP, Material UI, Figma, Adobe XD"/>
    <ExperienceCard img_src={Ilya.src} name="Илья Хакимов" 
      role="Frontend Next.js Developer" 
      skills="TypeScript, Next.js, React, TailwindCSS, MaterialUI, axios, zustand, react-query, react-hook-form, Framer Motion, HTTP(S), HTML/CSS/JS"/>
    <ExperienceCard img_src={Vanya.src} name="Ваня Ермолов" 
      role="Data Scientist, Data Engineer, Chatbot Developer" 
      skills="Python, C++, C#, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Tensor-Flow, Keras, PyTorch, Dask, Aiogram, VK-API"/>
    <ExperienceCard img_src={Arsen.src} name="Арсен Сабирзянов" 
      role="TeamLead, DevOps, Project Manager, Backend, Architect" 
      skills="Исполнительность, API, Работа в команде, Работа с большим объемом информации, GOlang, Bash, TCP/IP, FTP, Atlassian Jira, Английский язык, Git, Bootstrap, Управление проектами, Node.js, Docker, Nginx, ООП, Django Framework, Flask, MySQL, PostgreSQL, MongoDB, Linux, XML, CSS, Docker-Compose, Python, SQL, JavaScript"/>
    <ExperienceCard img_src={Rustam.src} name="Рустам Афанасьев" 
      role="Backend Python Developer" 
      skills="Sql, Python, FastAPI, PostgreSQL, MongoDB, Docker, QT, OpenGL, Gitlab CI/DI, C#, C/C++, Golang"/>
  </ul>
</div>
</div>
</motion.div>
  )
}

export default WorkExperience
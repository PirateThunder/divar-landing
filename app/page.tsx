import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import specialist from "../public/specialist.png"
import scala from "../public/scala.gif"

export default function Home() {
  return (
    <>
    {/* <div className="landscape-warning flex justify-center items-center h-full">
      Поверни телефон по вертикали пожалуйста :)
    </div> */}
    <div className="landscape-warning">
      <p style={{textAlign: 'center'}}>Поверни телефон по вертикали пожалуйста :)</p>
      <img style={{marginLeft: 'calc(50%-150px)'}} width={300} height={300} src={scala.src} alt="scala"/>
    </div>
    <div className='page-base bg-[#363636] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#0000ff]/80'>
      <Header/>

      <section id="hero" className='snap-start'>
        <Hero/>
      </section>

      <section id="about" className='snap-center'>
        <About/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience/>
      </section>
      
      {/* <section id="skills" className='snap-start'>
        <Skills/>
      </section> */}

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>

      
      
        <footer className='sticky bottom-8 justify-end flex w-full pr-10' >
          <div className='flex items-center justify-center'>
          <a
            href='#hero'>
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 
            cursor-pointer '
            src={specialist.src} alt="" />
          </a>
          </div>
        </footer>

    </div>
    </>
  )
}
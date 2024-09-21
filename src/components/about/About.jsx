import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about___container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <VscFolderActive className='about_icon'/>
              <h5>Projects</h5>
              
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, harum.
          </p>
          <a href="#contact"className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
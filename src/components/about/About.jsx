import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = ()=>{
    return(
       <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="About Image" />
            </div>
            </div>
            <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>6+ Months</small>
                </article>
                <article className='about__card'>
                    <FiUsers className='about__icon'/>
                <h5>Clints</h5>
                <small>20+ Worldwide</small>
                </article>
                <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
                </article>
            </div>
            <center><p>
            This is Manish Kumar and I am Pursuing my Bachelor Degree from Centurion University Of Technology and Management and I Have Created Many Project By Using Frontend and Backend Development.
            </p></center>
            </div>
        </div>
         </section>
    )
}

export default About

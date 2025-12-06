import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'



function About (){
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt="Our Work"/>
      </div>

       <div className="about-right">
        <h3>ABOUT THE DEON ELLISON FOUNDATION</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>Nurturing children and teaching the next generation is the most vital investment
        we can make in the future. It goes beyond simple instruction; it is about empowering young minds
        by instilling not just knowledge, but also resilience, empathy, and critical thinking.</p>
        <p>By creating supportive and stimulating environments,
         we cultivate their innate potential, guiding them to become not only successful individuals
        but also compassionate, capable leaders ready to tackle the challenges of tomorrow.</p>
        <p>This intentional mentorship ensures that the values and tools necessary 
        for a better world are passed forward.</p>
      </div>
    </div>
  )
}

export default About

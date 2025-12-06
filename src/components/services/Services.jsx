import React from 'react'
import './Services.css'
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'
import service1_icon from '../../assets/program-icon-1.png'
import service3_icon from '../../assets/program-icon-3.png'

function Services() {
  return (
    <div className='services'>

      <div className="service">
        <img src={service1}  />
        <div className="caption">
            <img src={service1_icon} alt="Service Icon" />
            <p>Teaching</p>
        </div>
      </div>

       <div className="service">
        <img src={service2} alt="Service 2" />
          <div className="caption">
            <img src={service1_icon} alt="Service Icon" />
            <p>Cultivating Future Success </p>
        </div>
      </div>

       <div className="service">
        <img src={service3} alt="Service 3" />
          <div className="caption">
            <img src={service3_icon} />
            <p>Graduating</p>
        </div>
      </div>

    </div>
  )
}

export default Services

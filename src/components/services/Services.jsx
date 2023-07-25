import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>What I offer</h2>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service__head">
            <h3>DSA Problems</h3>
            {/* <h3>UI/UX Design</h3> */}
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>150+ on GFG</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>400+ on Leetcode</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>100+ on CodeStudio</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python</p>
            </li>
          
          </ul>
        </article>

        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Developpment</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>theusazone.com</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>collagecart.com</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>chandanchaturvedi.github.com</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>GlassCart.com</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>and many more</p>
            </li>
            
          </ul>
        </article>

        {/* WEB DEVELOPMENT*/}
        <article className='service'>
          <div className="service__head">
            <h3>UX/UI</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React</p>
            </li>
            
          </ul>
        </article>

        {/* END OF  CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services

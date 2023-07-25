import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
     <h5>What Skills I Have</h5>
     <h2>My Experience</h2>
     <div className="container experience__container">
     <div className="experience__frontend">
        <h3>Frontend Development</h3>
       <div className="experience__content">
        <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill/>
         <div>
         <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill/>
         <div>
         <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill/>
          <div>
          <h4>Tallwind CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill/>
         <div>
         <h4>React</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
       
       </div>
     </div>
     { /* end of frontend */ }

     <div className="experience__backend">
     <h3>Backend Development</h3>
       <div className="experience__content">
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Node.Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>MangoDb</h4>
          <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>SQL</h4>
          <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>Python</h4>
          <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Programming Languages  Other skills </h4>
          <small className='text-light'>C++ , DSA in C++, problem solving skills</small>
        </div>
        </article>
        
       
       </div>
     </div>

     </div>
    </section>
  )
}

export default experience

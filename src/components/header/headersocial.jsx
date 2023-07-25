import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const headersocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/chandan-kumar-chaubey"  target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/chandansiku97"  target="_blank"><BsGithub/></a>
      <a href="https://www.youtube.com/@technicalpanditjifreecodin4391"  target="_blank">1.<BsYoutube/></a>
      <a href="https://www.youtube.com/@chandanchaturvediofficial/featured"  target="_blank">2.<BsYoutube/></a>
      <a href="https://www.instagram.com/chandan_chaturvedi97/"  target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headersocial

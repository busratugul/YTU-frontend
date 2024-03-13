import React from 'react'
import { FaGithubAlt } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationPin } from 'react-icons/fa6'

function Socialmedia({ userInfo }) {
  return (
    <div style={{ width: '100%' }} className="mt-3">
      <a target="_blank" href="https://github.com/busratugul">
        <FaGithubAlt className="text-primary fs-5 me-3" />
      </a>
      <a href="https://www.linkedin.com/in/busratugul/" target="_blank">
        <FaLinkedinIn className="text-primary fs-5 me-3" />
      </a>
      <a href={`tel:${userInfo.phone}`}>
        <FaPhoneAlt className="text-primary fs-6 me-3" />
      </a>
      <a href={`mailto: ${userInfo.email} `}>
        <MdEmail className="text-primary fs-5 me-3" />
      </a>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${userInfo.location.coordinates.latitude},${userInfo.location.coordinates.longitude}`} target="_blank"
      >
        <FaLocationPin className="text-primary fs-6 me-3" />
      </a>
    </div>
  )
}

export default Socialmedia

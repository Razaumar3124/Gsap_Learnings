import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const Task1 = () => {

  useGSAP(() => {
    gsap.to("#blue-box", {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease: "elastic"
    })
  }, []); 

  return (
    <div className='mt-20'>
        <div id="blue-box" className='w-20 h-20 bg-blue-600 rounded-lg' />
    </div>
  )
}

export default Task1
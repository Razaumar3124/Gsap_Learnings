import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Task1 = () => {

  useGSAP(() => {
    gsap.fromTo("#blue-box", {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
    },
    {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        duration: 2,
        rotation: 360,
        ease: "power1.inOut",
    }
    )
  }, [])  

  return (
    <div className='mt-20'>
        <div id="blue-box" className='w-20 h-20 bg-blue-600 rounded-lg' />
    </div>
  )
}

export default Task1
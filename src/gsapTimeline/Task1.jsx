import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react'

const Task1 = () => {

  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut"
    });

    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut"
    })

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      duration: 2,
      rotation: 360,
      borderRadius: "8px",
      ease: "back.inOut"
    });
  }, [])

  return (
    <div className='mt-20 space-y-10'>
        <button className='border-1 w-30 h-10 rounded-lg' onClick={()=>{
          if(timeline.paused()){
            timeline.play();
          } else {
            timeline.pause();
          }
        }}>
          Play / Pause
        </button>
        <div id="yellow-box" className='w-20 h-20 bg-yellow-600 rounded-lg' />
    </div>
  )
}

export default Task1
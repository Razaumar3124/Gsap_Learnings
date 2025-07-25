import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Task1 = () => {

  const scrollRef = useRef();
  
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box)=>{
        gsap.to(box, {
            x: 150 * (boxes.indexOf(box) + 5),
            rotation: 360,
            borderRadius: "100%",
            scale: 1.5,
            scrollTrigger: {
                trigger: box,
                start: "bottom bottom",
                end: "top 10%",
                scrub: true,
            },
            ease: "power1.inOut",
        })
    })
  }, { scope: scrollRef });

  return (
    <div className='h-[2000px] w-full'>
        <div ref={scrollRef} className='h-[500px] w-full mt-[1000px]'>
        <div id='scroll-pink' className='scroll-box w-20 h-20 rounded-lg bg-pink-500' />
        <div id='scroll-orange' className='scroll-box w-20 h-20 rounded-lg bg-orange-500' />
    </div>
    </div>
    
  )
}

export default Task1
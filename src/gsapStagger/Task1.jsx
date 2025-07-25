import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const Task1 = () => {

  useGSAP(() => {
    gsap.to(".stagger-box", {
        y: 250,
        rotation: 360,
        borderRadius: "100%",
        repeat: -1,
        yoyo: true,
        stagger: {
            amount: 1.5,
            grid: [2, 1],
            axis: "y",
            ease: "circ.inOut",
            from: "center",
        },
    });
  }, []);

  return (
    <div className='mt-20'>
        <div className='flex gap-5'>
            <div id="yellow-box" className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box' />
            <div id="yellow-box" className='w-20 h-20 bg-indigo-300 rounded-lg stagger-box' />
            <div id="yellow-box" className='w-20 h-20 bg-indigo-400 rounded-lg stagger-box' />
            <div id="yellow-box" className='w-20 h-20 bg-indigo-500 rounded-lg stagger-box' />
            <div id="yellow-box" className='w-20 h-20 bg-indigo-600 rounded-lg stagger-box' />
            <div id="yellow-box" className='w-20 h-20 bg-indigo-700 rounded-lg stagger-box' />
            <div id="yellow-box" className='w-20 h-20 bg-indigo-800 rounded-lg stagger-box' />
        </div>        
    </div>
  )
}

export default Task1
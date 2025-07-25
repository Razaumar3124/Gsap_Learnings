import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Task1 = () => {

  useGSAP(() => {
    gsap.to("#text", {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
    });

    gsap.fromTo(".para", {
        opacity: 0,
        y: 20,
    }, {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
    })
  }, [])  

  return (
    <main>
        <h1 id="text" className='opacity-0 translate-y-10'>
            GsapText
        </h1>

        <p className='mt-5 text-gray-500 para'>
            We can use same method like
            <code>gsap.to()</code>
            <code>gsap.from()</code>
            <code>gsap.fromTo()</code>and{" "}
            <code>gsap.timeline</code>to 
            animate text.
        </p>
    </main>
  )
}

export default Task1
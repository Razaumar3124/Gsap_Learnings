import React from 'react'
import { navLinks } from '../Constance'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top"
            }
        });

        navTween.fromTo("nav", { backgroundColor: "transparent" }, {
            backgroundColor: "#00000050",
            backgroundFilter: "blur(10px)",
            duration: 1,
            ease: "power1.inOut",
        });
    }, []);

  return (
    <nav>
        <div className='w-[80%]'>
            <a href="#home" className='flex items-center gap-2'>
                <img src="images/logo.png" alt="logo" />
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((val,i) => (
                    <li key={i}>
                        <a href={`#${val.id}`}>
                            {val.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
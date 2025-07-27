import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 }); //width less than 767 will be consider as mobile above that is laptop

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });

    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06
    }); //here i wanted to animated for one single char at a time so we use herosplit.chars

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1 //here in this line we are purposefully delaying the animation because user can't see everything at once  for ex:- heroSplit some added delay then uses see paragraphSplit
    }); //here i wanted to animated for one single line at a time so we use paragraphSplit.lines

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true, //using scrub as true the animation will directly related to the scroll 
      }
    })
    .to(".right-leaf", { y: 200 }, 0)
    .to(".left-leaf", { y: -200 }, 0)

    const startValue = isMobile ? "center 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true, //this property will keep the video stick to the screen
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration
      })
    }

  }, []);

  return (
    <>
    <section id="hero" className='noisy'>
      <h1 className='title'>MOJITO</h1>

      <img 
      src="/images/hero-left-leaf.png" 
      alt="left-leaf"
      className='left-leaf' 
      />

      <img 
      src="/images/hero-right-leaf.png" 
      alt="right-leaf"
      className='right-leaf' 
      />

      <div className='body'>
        <div className='content'>
          <div className='space-y-5 hidden md:block'>
            <p>Cool. Crisp. Classic.</p>
            <p className='subtitle'>
              Sip the Spirit <br /> of Summer 
            </p>
          </div>

          <div className='view-cocktails'>
            <p className='subtitle'>
              Every cocktail on our menu is a blend of premium ingrediants, creative flair, and timeless recipes   designed to delight your senses.
            </p>

            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>

    <div className='video absolute inset-0'>
      <video 
      ref={videoRef}
      src="/videos/output.mp4" 
      muted 
      playsInline
      preload='auto'
      />
    </div>
    </>
  )
}

export default Hero
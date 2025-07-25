import React from 'react'
import ToMain from './gsapTo/ToMain'
import FromMain from './gsapFrom/FromMain'
import FromToMain from './gsapFromTo/FromToMain'
import TimelineMain from './gsapTimeline/TimelineMain'
import StaggerMain from './gsapStagger/StaggerMain'
import ScrollTriggerMain from './gsapScrollTrigger/ScrollTriggerMain'
import TextMain from './gsapText/TextMain'
import AdvanceMain from './AdvanceAnimations/AdvanceMain'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    // <ToMain />
    // <FromMain />
    // <FromToMain />
    // <TimelineMain />
    // <StaggerMain />
    // <ScrollTriggerMain />
    // <TextMain />
    <AdvanceMain />
  )
}

export default App
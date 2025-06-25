
import './App.scss'
import TopBanner from './components/TopBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import SectionHello from './components/SectionHello'
import SectionCollection from './components/SectionCollection'
import { useState } from 'react'
function App() {
  const [topBanner, setTopBanner] = useState("")

  const upTopBanner=()=>{
      setTopBanner('up')
  }
  return (
    <div className={`app-container ${topBanner}`}>
    <TopBanner onClick={upTopBanner} topBanner={topBanner} />
    <Header/>
    <Hero/>
    <SectionHello/>
    <SectionCollection/>
    </div>
  )
}

export default App

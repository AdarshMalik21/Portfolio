import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Protfolio/Protfolio'
import Footer from './Components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Hero />
    <About />  
    <Portfolio />
    <Footer />
    </>
  )
}

export default App

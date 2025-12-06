import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Title from './components/title/Title'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Contact  from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle = 'Our SERVICE' title = 'What we offer' />
      <Services/>
      <About />
      <Title subTitle = 'GALLERY' title = 'Foundation Photos' />
      <Gallery/>
      <Title subTitle = 'Contact Us' title = 'Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App

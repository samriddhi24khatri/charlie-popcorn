import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Flavors from './components/Flavors'
import HowToOrder from './components/HowToOrder'
import FAQs from './components/FAQs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div data-theme="charlie" className="min-h-screen">
      <Header />
      <main className="content-container">
        {/* Other page content */}
        <About /> 
        <Flavors /> 
        <HowToOrder />
        <FAQs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App

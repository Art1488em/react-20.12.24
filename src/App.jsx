import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contacts from './components/Contacts/Contacts'
import Intruduction from './components/Introduction/Intruduction'
import Tarifs from './components/Tarifs/Tarifs'
import Used from './components/Used/Used'
import Level from './components/Level/Level'
import Manta from './components/Manta/Manta'



const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Contacts/>
      <Manta/>
      <Intruduction/>
      <Tarifs/>
      <Used/>
      <Intruduction/>
      <Level/>

    </>
  )
}

export default App
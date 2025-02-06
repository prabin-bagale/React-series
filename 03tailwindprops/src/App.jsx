import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded mb-4'>TailwindCSS</h1>
      <Card username="prabin"/>
      <Card />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { ImageSlider } from './Components/ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider />
    </>
  )
}

export default App

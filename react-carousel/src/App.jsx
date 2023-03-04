import { useState } from 'react'
import './App.css'
import CarouselGeneral from './components/carousel/CarouselGeneral'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
        <CarouselGeneral />

    </div>
  )
}

export default App

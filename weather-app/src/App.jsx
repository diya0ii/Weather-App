import { useState } from 'react'
import weather from './assets/weather.svg'
import './App.css'
import WeatherForm from './components/weatherform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-slate-400 min-h-screen flex items-center justify-center'>
        <a>
          <img src={weather} className="logo" alt="weather logo" />
        </a>
        <WeatherForm />
      </div>
    </>
  )
}

export default App

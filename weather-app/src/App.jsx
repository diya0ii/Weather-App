import { useState } from 'react'

import './App.css'
import WeatherForm from './components/weatherform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WeatherForm />
      </div>
    </>
  )
}

export default App

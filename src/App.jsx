import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import Hotels from './containers/Hotels/Hotels'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hotels></Hotels>
    </>
  )
}

export default App

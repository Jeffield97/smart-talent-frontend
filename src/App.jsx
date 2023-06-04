import './App.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className='App overflow-x-hidden min-h-screen' style={{background:"rgb(50 62 70)"}}>
      <Outlet></Outlet>
    </div>
  )
}

export default App

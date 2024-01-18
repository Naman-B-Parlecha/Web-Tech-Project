import { useState } from 'react'

import Login from './components/Login.jsx';
import './app.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Home'>
    <Login />
    </div>
  )
}

export default App

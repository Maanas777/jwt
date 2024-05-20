import { useState } from 'react'
import Login from './components/login/login'
import Signup from './components/signup/signup'
import Dashboard from './components/dashboard/dashboard'
import ErrorPage from './components/errorpage/error'
import { Routes,Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
<Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
<Route path='/error' element={<ErrorPage/>}></Route>

</Routes>
  
  )
}

export default App

import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Home, UnderConstruction } from './pages'
import { NavigationDesktop } from './components'

function App() {

  return (
    <>
    <NavigationDesktop/>
    <Routes>
      <Route path='/' element={<Navigate to="/home"/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/:name' element={<UnderConstruction/>}/>
    </Routes>
    </>
  )
}

export default App

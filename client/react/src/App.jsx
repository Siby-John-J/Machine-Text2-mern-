import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { ToggleContext } from './context/toggleContext'
import Register from './components/Register'
import User from './components/User'

function App() {
  const [page, setPage] = useState('login')
  const [userData, setUserData] = useState('')

  // useEffect(() =>{
  //   const res = fetch("http://localhost:2000/").then(e =>{
      
  //   })
  // }, [])

  return (  
    <>
      <ToggleContext.Provider value={{page, setPage, userData, setUserData}}>
          {
            page === 'login' && <Login />
          }
          {
            page === 'register' && <Register />
          }
          {
            page === 'user' && <User />
          }
      </ToggleContext.Provider>
      {/* <Login /> */}
    </>
  )
}

export default App

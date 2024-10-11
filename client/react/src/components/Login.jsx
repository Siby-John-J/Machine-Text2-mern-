import React, { useContext, useState } from 'react'
import "./Regiser.css"
import { ToggleContext } from '../context/toggleContext'

function Login() {
  const { page, setPage, setUserData, userData } = useContext(ToggleContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createLogin = async () => {
    const res = await fetch(`http://localhost:2000/?email=${email}&password=${password}`, {
      method: 'GET',
    })

    const json = await res.json()
    console.log(json);

    
    if(json.message === 'error') {
      alert('cannot find user')
    } else {
      setUserData(prev => json.message)
      setPage(prev => 'user')
    }
  }

  return (
    <div className='register-holder'>
        <h1>Login user</h1>
        <h1 className='register' onClick={e => {
          setPage(prev => 'register')
        }}>go to register</h1>
        <div className='input'>
            <label htmlFor="">email</label>
            <input type="email" onChange={e => {
              setEmail(prev => e.target.value)
            }} />
        </div>
        <div className='input'>
            <label htmlFor="">password</label>
            <input type="password" onChange={e => {
              setPassword(prev => e.target.value)
            }} />

        </div>
        <div className='submit' >
          <button className='create' onClick={createLogin}>Send</button>
          <button className='cancel'>Cancel</button>
        </div>
    </div>
  )
}

export default Login
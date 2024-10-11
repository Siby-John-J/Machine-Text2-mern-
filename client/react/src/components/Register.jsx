import React, { useContext, useState } from 'react'
import "./Regiser.css"
import { ToggleContext } from '../context/toggleContext'

function Register() {
  const { page, setPage } = useContext(ToggleContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  console.log(page)
  

  const createRegister = async () => {
    const res = await fetch('http://localhost:2000/', {
      method: 'POST',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        phone
      })
    })

    const json = res.json()

  }

  return (
    <div className='register-holder'>
        <h1>Register user</h1>
        <h1 className='register' onClick={e => {
          setPage(prev => 'login')
        }}>go to login</h1>
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
        <div className='input'>
            <label htmlFor="">phone</label>
            <input type="phone" onChange={e => {
              setPhone(prev => e.target.value)
            }} />
        </div>
        <div className='submit'>
          <button className='create' onClick={createRegister}>Create</button>
          <button className='cancel'>Cancel</button>
        </div>
    </div>
  )
}

export default Register
import React, { useContext } from 'react'
import { ToggleContext } from '../context/toggleContext'

function User() {
  const { page, setPage, setUserData, userData } = useContext(ToggleContext)

  return (
    <div className=''>
      <div className=''>
        {
          JSON.stringify(userData)
        }
      </div>
    </div>
  )
}

export default User
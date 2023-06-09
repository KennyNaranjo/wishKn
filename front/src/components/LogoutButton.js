import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

 const LogoutButton = () => {
    const {logout} = useAuth0()
  return (
    <button className="bg-green-600 hover:bg-green-500 text-sm px-2 py-1 rounded-sm" onClick={() => logout()}>
        Logout
    </button>
    
  )
}

export default LogoutButton

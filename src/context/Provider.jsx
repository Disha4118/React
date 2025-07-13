import React from 'react'
import UserContext from './Usercontext'
import { useState } from 'react'
const Provider = ({children}) => {
    const [user, setUser]=useState('');
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default Provider

import React, { createContext, useState } from 'react'
import UserSignup from '../pages/UserSignup'

export const UserDataContext = createContext()


const UserContext = ({children}) => {

      const [user , setUser]= useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        },
    
      })

  return (
    <div>
      <UserDataContext.Provider value={{user, setUser}}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext

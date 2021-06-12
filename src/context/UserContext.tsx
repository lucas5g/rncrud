import React, { createContext } from "react";
import { useReducer } from "react";
import { Text, View } from "react-native";

import users from '../data/users'
const initialState = {users}

const UserContext = createContext({})

const actions = {
  createUser(state, action){
    const user = action.payload 
    user.id = parseInt(Math.random() * 100)
    // console.log({user})
    // return state

    return{
      ...state,
      users: [...state.users, user]
    }
  },

  updateUser(state, action) {
    const updated = action.payload 
    return {
      ...state,
      users: state.users.map( u => u.id === updated.id ? updated:u )
    }
  },
  deleteUser(state, action){
    const user = action.payload
    return {
      ...state, 
      users: state.users.filter(u => u.id !== user.id)
    }
  },

}

export const UserProvider = ({ children }: any) => {

  function reducer(state, action) {
    const fn = actions[action.type]
    return fn ? fn(state, action):state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}


export default UserContext
import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Slices/userSlice';

const Login = () => {
  console.log("login")

  const dispatch = useDispatch();

  const login = ()=> {
    dispatch(setUser({
      name : "sk",
      email : "sk@gmail.com",

    }))
  }
  return (
    <div>
      <h1>Login</h1>

      <button className='btn btn-primary' onClick={login}>Login</button>
    </div>
  )
}

export default Login
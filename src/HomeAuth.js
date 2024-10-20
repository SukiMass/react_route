import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const HomeAuth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const pageRender=useNavigate();

  useEffect(()=>{
    if(!isLogin) pageRender("/")
  },[])

  return (
    <>
      {
        isLogin ?
          <Outlet />
          :
          null
      }
    </>
  )
}

export default HomeAuth
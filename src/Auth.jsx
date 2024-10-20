import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './views/Login'

const Auth = () => {

    const user = useSelector(state => state.userInfo.user)

    if (!user) {
        return <Navigate to="/"/>
    }

        return <Outlet />


}

export default Auth
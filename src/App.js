import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Profile from './views/Profile'
import Navbar from './Components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './App/store'
import Auth from './Auth'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<Auth />}>

            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </Provider>


  )
}

export default App

import React from 'react'
import Login from './components/Login.jsx'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'

const App = () => {
  const user = useSelector((store) => store?.user?.userDetails)
  return (
    <div>
      {!user 
      ?
      ( <Login/> ) 
      : 
      (
      <>
      <Header/>
      <Outlet />
      </>
      )}
      
    </div>
  )
}

export default App

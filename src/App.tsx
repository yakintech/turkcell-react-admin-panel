import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FacibilitiesRoutes from './pages/facibilities'
import MatchRoutes from './pages/match'
import Header from './components/layout-components/Header'
import { Container } from '@mui/material'
import Login from './pages/auth/Login'
import { AuthContext, AuthContextType } from './context/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { checkLogin } from './store/slices/AuthSlice'
import AdminUserRoutes from './pages/adminuser'


function App() {

  const { isLogin, loading } = useContext(AuthContext) as AuthContextType
  const { auth } = useSelector((state: any) => state)

  let dispatch : any = useDispatch()

  useEffect(() => {
    
    dispatch(checkLogin())

  }, [])
  


  return <>
    {
      loading ? <h1>loading...</h1> : (
        auth.isLogin ? (
          <>
            <Header />
            <Container>
              <Routes>
                <Route path="/facibilities/*" element={<FacibilitiesRoutes />} />
                <Route path="/match/*" element={<MatchRoutes />} />
                <Route path='/adminusers/*' element={<AdminUserRoutes />} />
              </Routes>
            </Container>
          </>
        ) : (
          <Login />
        )
      )
    }
  </>
}

export default App
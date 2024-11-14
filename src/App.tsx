import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FacibilitiesRoutes from './pages/facibilities'
import MatchRoutes from './pages/match'
import Header from './components/layout-components/Header'
import { Container } from '@mui/material'
import Login from './pages/auth/Login'
import { AuthContext, AuthContextType } from './context/AuthContext'

function App() {

  const { isLogin, loading } = useContext(AuthContext) as AuthContextType

  return <>
    {
      loading ? <h1>loading...</h1> : (
        isLogin ? (
          <>
            <Header />
            <Container>
              <Routes>
                <Route path="/facilities/*" element={<FacibilitiesRoutes />} />
                <Route path="/match/*" element={<MatchRoutes />} />
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
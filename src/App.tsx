import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FacibilitiesRoutes from './pages/facibilities'
import MatchRoutes from './pages/match'
import Header from './components/layout-components/Header'
import { Container } from '@mui/material'
import Login from './pages/auth/Login'

function App() {

  var isLogin = true


  return <>
    {
      isLogin ? <>
        <Header />
        <hr />
        <Container sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/facibilities/*" element={<FacibilitiesRoutes />} />
            <Route path='/match/*' element={<MatchRoutes />} />
          </Routes>
        </Container>
      </>
        : <Login />
    }
  </>
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FacibilitiesRoutes from './pages/facibilities'
import MatchRoutes from './pages/match'

function App() {
  return <Routes>
    <Route path="/facibilities/*" element={<FacibilitiesRoutes />} />
    <Route path='/match/*' element={<MatchRoutes />} />
  </Routes>
}

export default App
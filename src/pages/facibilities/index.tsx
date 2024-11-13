import React from 'react'
import { Routes, Route } from 'react-router-dom'
import List from './list'
import Add from './add'
import Update from './update'

function FacibilitiesRoutes() {
    return <Routes>
        <Route path="/" element={<List />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />
    </Routes>
}

export default FacibilitiesRoutes
import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

  const [counter, setcounter] = useState(0)
  const [name, setname] = useState("")

  console.log('Header component rendered')


  let expensiceResult = useMemo(() => expensiveCalculation(counter), [counter])

  const navigate = useNavigate()

  return <>
    <hr />
    {/* <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
    <hr />
    <button onClick={() => setcounter(counter + 1)}>Counter: {counter}</button>
    <hr />
    <h1>Expensive Result: {expensiceResult}</h1>
    <hr /> */}
    <h1 style={{ textAlign: 'center' }}>Admin Users List</h1>
    <button onClick={() => navigate('/adminusers/add')}>Add New User</button>
    <hr />
  </>
}

export default Header


const expensiveCalculation = (num: number) => {
  console.log('Expensive Calculation')

  let total = 0;
  for (let i = 0; i < 1000000000; i++) {
    total += num
  }
  return total
}
import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {

    const [counter, setcounter] = useState(0)


    const handleClick = useCallback(() => {
        console.log("Counter: ", counter)
        console.log("Button clicked!")
    }, [])

    return <>
        <Child onclick={handleClick} />
        <hr />
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
}

export default Parent
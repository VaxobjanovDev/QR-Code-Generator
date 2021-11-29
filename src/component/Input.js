import React from 'react'

const Input = ({setInput}) => {
    return (
            <input onChange={(e)=>setInput(e.target.value)} placeholder='Enter text or link...'/>
    )
}

export default Input

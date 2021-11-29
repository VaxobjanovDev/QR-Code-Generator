import React from 'react'

const SetBackground = ({setSize,setBackground, qrCode}) => {
    return (
        <form>
            <input onChange={(e)=>setBackground(e.target.value)} type='color'/>
            <input onChange={(e)=>setSize(e.target.value)} type='number' />
            <a href={qrCode} download='qrCode download'>
                <button>Download</button>
            </a>
        </form>
    )
}

export default SetBackground

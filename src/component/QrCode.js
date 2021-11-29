import React from 'react'
import SetBackground from './SetBackground'

const QrCode = ({qrCode, setSize,setBackground}) => {
    return (
        <div className='codeImg'>
            <img src={qrCode} alt='qrCode image'/>
            <SetBackground setSize={setSize} setBackground={setBackground}/>
        </div>
    )
}

export default QrCode

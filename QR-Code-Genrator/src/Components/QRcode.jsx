import React, { useState } from 'react'
import '../App.css'

export const QRcode = () => {

    const [code, setCode] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')

    const generateCode = () => {
        event.preventDefault()
        setShow(true)
        if(code.length === 0){
            setShow(false)
            setMessage('Please Enter Something')
           
        }
        if(code.length >0){
            setImgSrc('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + code)
        }
        setCode('')
    }

  return (
    <div className='container'>
        <h1>Enter Your Text for QR-Code</h1>

    <input type="text" className='input' value={code} onChange={(e) => setCode(e.target.value)} />

    {show ?
       ( <div className='qr-code'>
        <img src={imgSrc} alt="QR-code" />
    </div>):('')
    }

    <button type='submit' className='btn' onClick={generateCode}>Generate QR Code</button>

    <p>{show ? '' : message} </p>

    </div>
  )
}

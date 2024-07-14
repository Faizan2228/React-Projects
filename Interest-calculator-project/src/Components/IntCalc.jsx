import React, { useState } from 'react'
import '../App.css'


export const IntCalc = () => {

  const [plAmount, setPlAmount] = useState('')
  const [interest, setInterest] = useState('')
  const [time, setTime] = useState('')
  const [simpleInterest, setSimpleInterest] = useState('')
  const [message, setMessage] = useState('')

  const handleCalc = () => {
    event.preventDefault();

    if(plAmount === '' || interest === '' || time === ''){
      setMessage('Enter necessary values')
      setTimeout(()=> setMessage(''), 4000)
    }

    let simpleInterestCalc = plAmount * interest * time / 100;
    setSimpleInterest(simpleInterestCalc)

    setInterest('')
    setPlAmount('')
    setTime('')
    
  }

  const handleReset = () => {
    event.preventDefault()
    setMessage('')
    setSimpleInterest('')
    setInterest('')
    setPlAmount('')
    setTime('')
  }

  return (
    <div className='container'>

        <div className='intro-box'>
            <h1>Simple Calculatore</h1>
            <p>calculate your simple interest Easily</p>
        </div>

        <div className='result-box'>
          <h1>₹ {simpleInterest} </h1>
          <p>Total simple interest</p>
        </div>
        
        <form className='form-box' onSubmit={handleCalc}>

          <input type="text" placeholder='₹ Principal amount' value={plAmount} onChange={(e) => setPlAmount(e.target.value)} />

          <input type="text" placeholder='Rate of interest (p.a) %' value={interest} onChange={(e) => setInterest(e.target.value)} />

          <input type="text" placeholder='Time period ( Yr )' value={time} onChange={(e) => setTime(e.target.value)} />

          <p style={{textAlign:'center',color:'red'}}>{message} </p>

          <div className='btn-box'>

            <button className='btn1' type='submit'>CALCULATE</button>
            <button className='btn2' onClick={handleReset}>RESET</button>

          </div>
        </form>
    </div>
  )
}

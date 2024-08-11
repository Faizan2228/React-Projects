import React, { useEffect, useState } from 'react'

export const FormValid = () => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        Cpassword:'',
        gender:''
    })
    const [submit, setSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState({})


    const handleChange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validateForm(data)
        setFormErrors(errors)
        setSubmit(true)
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && submit){
            console.log(data)
        }
    },[data, formErrors, submit])

    
    const validateForm = (value) => {

        let errors = {}
        let regex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/

        if(!value.username){
            errors.username = 'username required'
        }
        if(!value.email){
            errors.email = 'email required'
        }else if(!regex.test(value.email)){
            errors.email = 'invalid email'
        }
        if(!value.password){
            errors.password = 'password required'
        }
        if(value.password !== value.Cpassword){
            errors.Cpassword = 'password not Match'
        }
        return errors
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="text" name='username' placeholder='Enter name' value={data.username} onChange={handleChange} />
                {formErrors.username && <p>{formErrors.username} </p>}

                <label>Email</label>
                <input type="text" name='email' placeholder='Enter email' value={data.email} onChange={handleChange} />
                {formErrors.email && <p>{formErrors.email} </p>}

                <label>Password</label>
                <input type="text" name='password' placeholder='Enter password' value={data.password} onChange={handleChange} />
                {formErrors.password && <p>{formErrors.password} </p>}

                <label>Confirm Password</label>
                <input type="text" name='Cpassword' placeholder='Confirm password' value={data.Cpassword} onChange={handleChange} />
                {formErrors.Cpassword && <p>{formErrors.Cpassword} </p>}

                <p>Gender</p>
                <label>Male</label>
                <input type="radio" name='gender' value='Male' onChange={(e) => setData({...data, gender: e.target.value})} /> 
                <label>Female</label>
                <input type="radio" name='gender' value='Female' onChange={(e) => setData({...data, gender: e.target.value})} />

                    <br /><br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

import React, { useEffect, useState } from 'react'

export const Form = () => {

    const [formValue, setFormValue] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [formSubmit, setFormSubmit] = useState(false)

    const handleChange = (e) => {
        const {name,value} = e.target 

        setFormValue({...formValue, [name]: value})
    }

    const handeSubmit = (e) => {
        e.preventDefault()
        const errors = validate(formValue);
        setFormErrors(errors);
        setFormSubmit(true);
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && formSubmit){
            console.log(formValue)
        }
    },[formErrors, formSubmit, formValue])


    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!values.username){
            errors.username = 'username required'
        }
        if(!values.email){
            errors.email = 'email required'
        }
        else if (!regex.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if(!values.password){
            errors.password = 'password required'
        }
        return errors
    }

  return (
    <div>
        
        <h1>Login Form Validation</h1>

        <form onSubmit={handeSubmit} className='form-box'>
            <pre>{JSON.stringify(formValue, undefined,2)} </pre>
            <label>Username</label>
            <input type="text" name='username' value={formValue.username} onChange={handleChange} />
            {formErrors.username && <p>{formErrors.username}</p>}
            <label>Email</label>
            <input type="text" name='email' value={formValue.email} onChange={handleChange}  />
            {formErrors.email && <p>{formErrors.email}</p>}
            <label>Password</label>
            <input type="text" name='password' value={formValue.password} onChange={handleChange}  />
            {formErrors.password && <p>{formErrors.password}</p>}
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>

    </div>
  )
}

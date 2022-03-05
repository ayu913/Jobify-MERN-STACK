import React, { useState } from "react"
import { Alert, FormRow, Logo } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert />}
        {/* name input */}
        {/* if isMember is false (not true) then display name input field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* name input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'></button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register

import React, { useContext, useState } from "react"
import styled from "styled-components"
import {Link, Redirect} from "react-router-dom"
import { Form, Input, Button } from "antd"
import { login } from "../services"
import { MyContext } from "../context"


let baseURL;

process.env.NODE_ENV === "production"

  ? (baseURL = "https://radio-transatlantica.herokuapp.com") 
  : (baseURL = "http://localhost:3000"
)

const LogInStyled = styled.div`


background-color: black;
color: white;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.login-container {
    border: 2px solid white;
    background-color: black;
    color: white;
    width: 400px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1{
    margin-bottom: 24px;
}


a {
    color: #FF5C00;
}

p{
    margin-bottom: 24px;
}

.button{
    width: 120px;
    height: 40px;
    border: 1px solid white;
    background-color: black;
    color: white;
}

.email, .password, .button {
    margin-bottom: 24px;
}

.facebook{
    background-color: #0A83ED;
    color: white;    
}

.facebook>a{
    color: white;
    text-transform: uppercase;
    text-decoration: none;
}

.social-login{
    display: flex;
    flex-direction:  column;    
}

.rt-logo{
    width: 160px;
}

`

function LogIn({history}) {

    

    const [form] = Form.useForm()
    const { setContextUser, user } = useContext(MyContext)

  
    async function loginProcess(values) {
      const {
        data: { user }
      } = await login(values)
      delete user.password
      delete user.hash
      delete user.salt
      setContextUser(user)
      history.push("/profile")
    }

    return !user ? (
        <LogInStyled >

            <div className="login-container">

            <h1>LOG IN</h1>

            <Form layout='vertical' name='basic' form={form} onFinish={loginProcess}>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: "Please input your email!" }]}
          className="email"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
          className="password"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className="button">
            Login
          </Button>
        </Form.Item>
      </Form>


        <button className="button facebook">
          <a href={`${baseURL}/auth/facebook`}> Facebook</a>
        </button>


              <p>If you don't have an account <Link to="/signup">sign up here!</Link></p>  

              <Link to="/"><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601151919/radio-shows/rt-logo_white_onfwed.svg" alt="logo-rt" className="rt-logo"/></Link> 

              

            </div>            
        </LogInStyled>
    ) : (
        <Redirect to="/profile"/>
    )
}

export default LogIn
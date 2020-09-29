import React, { useStete, useContext } from "react"
import styled from "styled-components"
import {Link, Redirect} from "react-router-dom"
import { Form, Input, Button, Divider, Row, Col } from "antd"
import { login } from "../services"
import { MyContext } from "../context"
import { FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";

let baseURL;
// = "http://localhost:3000"

process.env.NODE_ENV === "production"

  ? (baseURL = "https://radio-transatlantica.herokuapp.com/") 
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
    border: 2px white solid;
    width: 400px;
    height:400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a{
    color: #FF5C00;
}

.social-login{
    display: flex;
    flex-direction:  column;    
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
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>

      <div className="social-login">
            <FacebookLoginButton style={{height:"32px", width:"320px", fontSize:"16px"}}/>

            <GoogleLoginButton style={{height:"32px",width:"320px", fontSize:"16px"}}/> 
      </div>


      <a href={`${baseURL}/auth/facebook`}>Login with Facebook</a>

      <a href={`${baseURL}/auth/google`}>Login with Google</a>

              <p>If you don't have an account<Link to="/signup">sign up here!</Link></p>  

            </div>            
        </LogInStyled>
    ) : (
        <Redirect to="/profile"/>
    )
}

export default LogIn
import React, {useContext} from 'react'
import {MyContext} from "../context"
import styled from "styled-components"
import {Link, Redirect} from 'react-router-dom'
import { Form, Input, Button} from 'antd';
import { signup } from "../services/index"

let baseURL;

process.env.NODE_ENV === "production"

  ? (baseURL = "https://radio-transatlantica.herokuapp.com") 
  : (baseURL = "http://localhost:3000"
)

const SignUpStyled = styled.div`


background-color: black;
color: white;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.signup-container{
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

.email, .password, .button {
    margin-bottom: 24px;
}

.button{
    width: 120px;
    height: 40px;
    border: 1px solid white;
    background-color: black;
    color: white;
}

a {
    color: #FF5C00;
}

p{
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

.rt-logo{
    width: 160px;
}

`

function SignUp( {history} ) {

    const [form] = Form.useForm()
    const {user} = useContext(MyContext)

    async function signUpProcess(values){
        await signup(values)
        history.push('/login')
    }


    return !user ? ( <SignUpStyled>
        <div className="signup-container">
        <h1>SIGN UP</h1>

        <Form layout='vertical' name='basic' form={form} onFinish={signUpProcess}>
            <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: "Please input your email!" }] }
            className="email"
            >
            <Input  className="input"/>
            </Form.Item>

            <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: "Please input your password!" }]}
            className="password"
            >
            <Input.Password  className="input"/>
            </Form.Item>

            <Form.Item>
            <Button type='primary' htmlType='submit' className="button">
                SUBMIT
            </Button>
            </Form.Item>
         </Form>
         <button className="button facebook">
            <a href={`${baseURL}/auth/facebook`}>Facebook</a>
         </button>

         <p>If you already have an account <Link to="/login">log in here!</Link></p>

         <Link to="/"><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601151919/radio-shows/rt-logo_white_onfwed.svg" alt="logo-rt" className="rt-logo"/></Link> 


        </div>

    </SignUpStyled>):(
         <Redirect to='/profile'/>
    )
       
    
}

export default SignUp

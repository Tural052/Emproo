import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { selectAllUsers } from '../redux/usersSlice';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { routing } from '../../globalRouting';
import logo from './../assets/svg/logo.svg'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const allUsers = useSelector(selectAllUsers)
    let selectUser;
    let navigation = useNavigate()
    const handelSubmit = (e) => {
        selectUser = allUsers.find((user) => user.email === email && user.password === password)
        if (selectUser) {
            routing.to(navigation, '/')
        }
        localStorage.setItem('user', selectUser.email)
        e.preventDefault()
    }
    return (

        <div className='container_form'>
            <div></div>
            <Form onSubmit={handelSubmit}>
                <img src={logo} alt="MAA" />
                <Form.Input label='Email' placeholder='joe@schmoe.com' value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Input label='Password' placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Login
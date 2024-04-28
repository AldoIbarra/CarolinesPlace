import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './SignIn.css'
import NavBar from '../../components/Nav/NavBar'
import PolachekSignIn from './PolachekSignIn2.png'

function SignIn() {
  return (
    <>
        <NavBar/>
        <Container className='SignInContainer'>
            <Row>
                <Col lg={6} className='SignIn'>
                    <h1 className='lancelot rose-text long-size'>Caroline's Place</h1>
                    <form action="" className='koulen rose-text'>
                        <label className='tiny-size' htmlFor="">EMAIL</label>
                        <input type="text" />
                        <label className='tiny-size' htmlFor="">PASSWORD</label>
                        <input type="text" />
                        <span><button className='medium-size'>SIGN IN</button></span>
                    </form>
                </Col>
                <Col lg={6} className='SignInImg'>
                    <img src={PolachekSignIn} alt="PolachekSignIn" />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default SignIn
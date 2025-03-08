import React from 'react'
import Header from './../Components/Header';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { ConfirmPassword, Email, MorraLogo, Password } from '../Imports/ImportImages';

function Login() {
  return (
    <div className='height-page-style'>
        <Header/>
        <section className='login'>
            <Row>
                <Col lg={6}>
                    <div className='logo-area'>
                        <img src={MorraLogo} alt='morra-logo'/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='login-content'>
                        <h2>Create Account</h2>
                        <p>To continue, create an account with Morra</p>
                        <div className='login-body'>
                            <div className='form-group'>
                                <label>EMAIL ADDRESS</label>
                                <div className='field-area'>
                                    <input type='text' placeholder='Your email...'/>
                                    <img src={Email} alt='email'/>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>PASSWORD</label>
                                <div className='field-area'>
                                    <input type='password' placeholder='Password'/>
                                    <img src={Password} alt='password'/>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>CONFIRM PASSWORD</label>
                                <div className='field-area'>
                                    <input type='password' placeholder='Confirm Password'/>
                                    <img src={ConfirmPassword} alt='Confirm Password'/>
                                </div>
                            </div>
                            <div>
                                <li class="term-checkbox">
                                    <input type="checkbox" name="" id="chk1"/> 
                                    <label for="chk1">I agree to gamestudio Terms & Conditions </label>
                                </li>
                            </div>
                            <div className='actions'>
                                <a href='' className='custom-btn'>
                                    SIGN IN
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    </div>
  )
}

export default Login
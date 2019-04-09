import React, { Component } from 'react';
import './index.css';
import { message, Card, Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import SignUpService from './SignUpService';

const {signUp} = new SignUpService();

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSignUp : false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const contentData = {
                    "username": values.username,
                    "password": values.password,
                    "email": values.email,
                    "fullname": values.fullname,
                    "phone_number": values.phoneNumber
                }
                signUp(contentData).then(response=>{
                    this.setState({isSignUp: true});
                    message.success('Sign up success');
                    return <Redirect to='/sign-in'/>
                }).catch(error=>{
                    console.log('Catch: ', values);
                    this.setState({isLoading:false});   
                    message.error(error.response.data.message);
                })
            }
        });
    
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    if(localStorage.getItem('access_token') != null){
        return(
            <Redirect to="/" />
        )
    } else {
        return  (
            <div className="container-sign-up">
                {this.state.isSignUp === true ?
                    <Redirect to="/sign-in" /> 
                    : 
                    <Card
                        hoverable
                        className = "card-sign-up"
                    >
                        <h2>Daftar Sekarang</h2>
                        Sudah punya akun MangKoding Store? <a href="/sign-in"> Masuk</a>
                        <div className="container-form">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please input your email!' }],
                                    })(
                                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('fullname', {
                                        rules: [{ required: true, message: 'Please input your full name!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Full Name" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('phoneNumber', {
                                        rules: [{ required: true, message: 'Please input your phone number!' }],
                                    })(
                                        <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone Number" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <a href="/sign-in">
                                        <Button htmlType="submit" type="primary" size="large" style={{width:'100%'}} className="login-form-button">Daftar</Button>
                                    </a>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                }
    
            </div>
        )
    }
  }
}

const WrappedSignUp= Form.create({ name: 'signUp' })(SignUp);
export default WrappedSignUp;

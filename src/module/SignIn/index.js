import React, { Component } from 'react';
import './index.css';
import { message, Card, Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import SignInService from './SignInService';

const {signIn} = new SignInService();

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin : false
          }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const contentData = {
                    "username": values.username,
                    "password": values.password
                }
                signIn(contentData).then(response=>{
                    const data = response.data;
                    message.success('Sign in success');
                    localStorage.setItem('access_token',data.access_token);
                    this.setState({isLogin: true});
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
            <div className="container-sign-in">
                <Card
                    hoverable
                    className = "card-sign-in"
                >
                    <h2>Masuk</h2>
                    Belum punya akun MangKoding Store? <a href="/sign-up"> Daftar</a>
                    <div className="container-form">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username or Email" />
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
                                <a href="/sign-in">
                                    <Button htmlType="submit" size="large" className="login-form-button">Masuk</Button>
                                </a>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>
            </div>
        )
        
    }

  }
}

const WrappedSignIn= Form.create({ name: 'signIn' })(Signin);
export default WrappedSignIn;

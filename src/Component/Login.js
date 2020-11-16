import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Action/User_Action';
import { Link } from 'react-router-dom';

const LoginOutsideContaier = styled.div`
  background-color: #e9ecef;
  padding-top: 10rem;
  width: 100%;
  height: 100vh;
`;

const LoginIntoContainer = styled.div`
  background-color: white;
  width: 35%;
  height: 60%;
  margin: 0 auto;
`;

const LoginTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginComponent = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 18rem;
  margin: 1rem 0%;
  padding: 0.4rem 0;
`;

const SignupBtn = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: right;
  margin-top: 2rem;
`;

const LoginBtnBox = styled.button`
  background-color: #11a8c7;
  padding: 1rem;
  text-align: center;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginUser) {
        props.history.push('/Home');
      } else {
        console.log(res.payload);
        alert('로그인에 실패 하셨습니다.');
      }
    });
  };

  return (
    <>
      <LoginOutsideContaier>
        <LoginIntoContainer>
          <LoginTitle>로그인</LoginTitle>
          <LoginBox>
            <LoginComponent onSubmit={onSubmit}>
              <Input
                type='email'
                id='email'
                onChange={onChange}
                autoComplete='current-email'
                placeholder='Email'
              />
              <Input
                type='password'
                id='password'
                onChange={onChange}
                autoComplete='current-password'
                placeholder='Password'
              />
              <br />
              <LoginBtnBox>Login</LoginBtnBox>
              <SignupBtn to='/Signup'>회원가입</SignupBtn>
            </LoginComponent>
          </LoginBox>
        </LoginIntoContainer>
      </LoginOutsideContaier>
    </>
  );
};

export default Login;

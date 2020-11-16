import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { signupUser } from '../Action/User_Action';
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

const SignupTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  padding-top: 3rem;
  padding-bottom: 1rem;
`;

const Input = styled.input`
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 18rem;
  margin: 0.7rem 0%;
  padding: 0.4rem 0;
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

const SignupBtnBox = styled.button`
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

const LoginpBtn = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: right;
  margin-top: 2rem;
`;

const Signup = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'name') {
      setName(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    let body = {
      email,
      password,
      name,
    };

    dispatch(signupUser(body)).then((res) => {
      if (res.payload.createUser) {
        props.history.push('/');
      } else {
        alert('회원가입에 실패 하셨습니다.');
      }
    });
  };

  return (
    <>
      <LoginOutsideContaier>
        <LoginIntoContainer>
          <SignupTitle>회원가입</SignupTitle>
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
                type='text'
                id='name'
                onChange={onChange}
                autoComplete='current-name'
                placeholder='Name'
              />

              <Input
                type='password'
                id='password'
                onChange={onChange}
                autoComplete='current-password'
                placeholder='Password'
              />

              <Input
                type='password'
                id='confirmpassword'
                onChange={onChange}
                autoComplete='current-password'
                placeholder='Confirmpassword'
              />
              <br />
              <SignupBtnBox type='submit'>SignUp</SignupBtnBox>
              <LoginpBtn to='/Login'>뒤로가기</LoginpBtn>
            </LoginComponent>
          </LoginBox>
        </LoginIntoContainer>
      </LoginOutsideContaier>
    </>
  );
};

export default Signup;

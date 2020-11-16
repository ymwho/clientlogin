import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;
  align-items: center;
  box-shadow: 4px 5px 3px rgba(200, 200, 200, 0.5);
`;
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10rem;
`;

const LogoutBtn = styled.button`
  outline: none;
  border: none;
  font-weight: bold;
  background-color: #934c47;
  padding: 0.3rem 0.7rem;
  color: white;
  margin: 0 10rem;
  cursor: pointer;
`;

const Gnb = (props) => {
  const onClick = () => {
    axios.get('/api/user/logout').then((res) => {
      if (res.data) {
        props.history.push('/Login');
      } else {
        alert('로그아웃 실패 입니다.');
      }
    });
  };
  return (
    <>
      <Nav>
        <Logo>M Y N O T E 📕</Logo>
        <LogoutBtn onClick={onClick}>로그아웃</LogoutBtn>
      </Nav>
    </>
  );
};

export default Gnb;

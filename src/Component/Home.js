import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import WriteContainers from './WriteContainers';
import Gnb from './Gnb';
import { Link } from 'react-router-dom';

const WriteContainer = styled.div`
  margin-top: 7rem;
`;
// const WriteBtn = styled(Link)`
//   position: absolute;
//   bottom: 10%;
//   right: 10%;
//   text-decoration: none;
//   color: black;
//   font-weight: bold;
// `;

const Home = (props) => {
  return (
    <>
      <Gnb {...props} />
      <WriteContainer>
        <WriteContainers />
      </WriteContainer>
      {/* <WriteBtn to='/WriteForm'>글쓰기</WriteBtn> */}
    </>
  );
};

export default Home;

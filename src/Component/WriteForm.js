import React, { useState } from 'react';
import Gnb from './Gnb';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const WriteFormContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin: 1.2rem 0;
`;

const TitleInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 2rem;
  width: 1000px;
  height: 30px;
  font-size: 1.3rem;

  &::-webkit-input-placeholder {
    font-size: 1.3rem;
  }
`;

const TextInput = styled.textarea`
  margin: 2rem;
  width: 1000px;
  height: 300px;
  resize: none;
  border: none;
  font-size: 0.9rem;

  &::-webkit-input-placeholder {
    font-size: 0.9rem;
  }
`;

const WriteFormBtn = styled.div``;
const Cancel = styled(Link)``;
const Insert = styled.button``;

const WriteForm = (props) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');

  const onChange = (e) => {
    if (e.target.id === 'Title') {
      setCurrentTitle(e.target.value);
    } else {
      setCurrentText(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = [currentTitle, currentText];
    setCurrentTitle('');
    setCurrentText('');
  };

  return (
    <>
      <Gnb {...props} />
      <WriteFormContainer>
        <Form onSubmit={onSubmit}>
          <FormTitle>게시글 작성</FormTitle>
          <TitleInput
            placeholder='제목을 입력해 주세요'
            onChange={onChange}
            id='Title'
            value={currentTitle}
          />
          <TextInput
            name='story'
            maxLength='500'
            placeholder='내용을 입력해   주세요'
            onChange={onChange}
            id='Text'
            value={currentText}
          />
          <Insert type='submit'>포스트등록</Insert>
        </Form>
      </WriteFormContainer>
      <WriteFormBtn>
        <Cancel to='/Home'>취소</Cancel>
      </WriteFormBtn>
    </>
  );
};

export default WriteForm;

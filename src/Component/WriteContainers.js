import React from 'react';
import styled from 'styled-components';

const TextBox = styled.div`
  width: 1280px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: auto;
  line-height: 2rem;
`;

const TextTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 3rem 0;
`;
const Text = styled.div`
  font-size: 1.2rem;
  margin: 4rem 0;
`;

const WriteContainers = () => {
  return (
    <>
      <TextBox>
        <TextTitle>테스트 포스트 </TextTitle>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </TextBox>
    </>
  );
};

export default WriteContainers;

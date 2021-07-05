import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: 500;
  color: #ebdafa;
`;

const Title: React.FC = () => {
  return (
    <div>
      <Heading>DP - Gallery</Heading>
    </div>
  );
};

export default Title;

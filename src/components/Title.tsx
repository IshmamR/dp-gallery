import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  margin-top: 2rem;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
`;

const Title: React.FC = () => {
  return (
    <div>
      <Heading>DP - Gallery</Heading>
    </div>
  );
};

export default Title;

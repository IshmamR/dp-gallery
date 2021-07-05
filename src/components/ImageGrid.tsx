import { Image } from "antd";
import React from "react";
import styled from "styled-components";
import useFireStore from "../hooks/useFireStore";

const Container = styled.div`
  padding: 0 2rem;
  min-width: 80%;
  max-width: 95%;
  margin: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
`;

const ImageDiv = styled.div`
  min-width: 180px;
  width: 220px;
  max-width: 250px;
  min-height: 180px;
  height: 200px;
  max-height: 250px;
  flex: 1;
  padding: 0.5rem;
`;

const ImageGrid: React.FC = () => {
  const { docs } = useFireStore("images");
  console.log(Image.PreviewGroup);
  return (
    <Container>
      <Image.PreviewGroup>
        <ImageContainer>
          {docs && docs.map(img => (
            <ImageDiv key={img._id}>
              <Image 
                src={img.url} 
                alt={img.url} 
                height={"100%"}
                width={"100%"}
              />
            </ImageDiv>
          ))}
        </ImageContainer>
      </Image.PreviewGroup>
    </Container>
  );
};

export default ImageGrid;

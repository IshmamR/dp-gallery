import { Button } from "antd";
import React, { useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { Gap } from "./atoms";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .ant-upload-list {
    display: flex;
    justify-content: center;

    .ant-upload {
      margin: 0;
    }
  }
`;

const Block = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;

const Upload = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

const UploadButton = styled(Button)`
  background-color: #512498;
  border-color: #8f55d9;
  &:hover, &:focus {
    background-color: #8f55d9;
    border-color: #d4b0f8;
  }
`;

const UploadInput: React.FC = () => {
  const types = ["image/png", "image/jpeg", "image/gif"];
  const [file, setFile] = useState<any>(null);
  const [error, setError] = useState<{message: string} | null>(null);

  const hiddenFileInput = useRef(null);

  const OnFileChange = (e: any) => {
    
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile && types.includes(selectedFile.type)) {
      setError(null);
      setFile(selectedFile);
    } else {
      setError({
        message: "Please select a valid type"
      });
      setFile(null);
    }
  };
  
  return (
    <Container>

      <Upload ref={hiddenFileInput} type={"file"} onChange={OnFileChange} />
      <UploadButton 
        type={"primary"}
        size={"large"}
        icon={<UploadOutlined />} 
        onClick={() => (hiddenFileInput.current as any).click()}
      >
        Click to Upload
      </UploadButton>
      
      <Gap height={"1rem"} />
      
      { error && <div>{error.message}</div> }
      { file && <Block>{file?.name}</Block> }
      { file && <ProgressBar file={file} setFile={setFile} /> }
    </Container>
  );
}

export default UploadInput;

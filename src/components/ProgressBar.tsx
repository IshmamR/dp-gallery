import { Progress } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import useStorage from "../hooks/useStorage";

const BarContainer = styled.div`
  width: 90%;
  margin: auto;
`;

interface IProps {
  file: any;
  setFile(file: any): void;
}

const ProgressBar: React.FC<IProps> = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url && progress === 100) {
      setFile(null);
    }
  }, [url, progress, setFile]);

  return (
    <BarContainer>
      <Progress
        strokeColor={{
          from: "#6a2dc2",
          to: "#EBDAFA",
        }}
        percent={progress}
        status="active"
      />
    </BarContainer>
  );
};

export default ProgressBar;

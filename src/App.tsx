import React from "react";
import "antd/dist/antd.css";
import ImageGrid from "./components/ImageGrid";
import Title from "./components/Title";
import UploadInput from "./components/UploadInput";
import { Gap } from "./components/atoms";

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <Gap height={"2rem"} />
      <UploadInput />
      <Gap height={"1rem"} />
      <ImageGrid />
    </div>
  );
};

export default App;

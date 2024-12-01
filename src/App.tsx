import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Label } from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsError(e.target.value.length === 0);
  };

  return (
    <>
      {/* 이메일 */}
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요"
        value=""
        errorMessage="이메일을 확인해주세요"
        isError={false}
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete-icon"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <div className="mt-6" />
      {/* 주소 */}
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        placeholder="주소을 입력하세요"
        value=""
        errorMessage="주소을 확인해주세요"
        isError={false}
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete-icon"
        onChange={() => {}}
        onIconClick={() => {}}
      />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Label } from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField 
    </>
  );
}

export default App;

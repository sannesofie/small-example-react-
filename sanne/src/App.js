
import './App.css';
import {InputForm} from '../src/components/InputForm.jsx'; 
import { useState } from "react";
import {Text} from "../src/components/Text.jsx";


function App() { 
  const [value, setValue] = useState ("");
  return (
    <div className="App">
<Text value = {value}/>
<InputForm onHandle = {(e) => setValue(e.target.value)}/>
    </div>
  );
}

export default App;

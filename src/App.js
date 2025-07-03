import { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState(0);
  const [value, setValue] = useState("");

  function handleChange(e) {
    const inputVal = e.target.value.replace(/[^0-9]/, "");
    if (inputVal === "") {
      setValue(inputVal);
      return;
    }
    const parsedVal = parseInt(inputVal);
    if (parsedVal < 1) return;
    setValue(parsedVal);
  }

  function handleSubmit() {
    const reserveVal = parseInt(value.toString().split("").reverse().join(""));
    setResult(Math.abs(value - reserveVal));
  }

  return (
    <div className="App">
      <div>
        Number:{" "}
        <input
          value={value}
          type="text"
          inputMode="numeric"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}

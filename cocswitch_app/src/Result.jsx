import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import "./Result.css";

function Result(props) {
  const [result, setResult] = useState("");
  if (props.result_med != -1) {
    setResult("The medication to switch to is:" + props.result_med + ".");
  } else {
    setResult("There is currently no suitable COC replacement.");
  }

  return (
    <>
      <NavigationBar />
      <div>
        <header>Form Result:</header>
        <div>
          <body className="matched_result">{result}</body>
        </div>
      </div>
    </>
  );
}
export default Result;

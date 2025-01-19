import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import BackButton from "./components/BackButton";

function Result() {
  const [result, setResult] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { result_med } = location.state || {};

  useEffect(() => {
    // Redirect to home if the required data isn't present
    if (result_med === undefined) {
      navigate("/");
      return;
    }

    // Set the result based on the passed data
    if (result_med == "-1") {
      setResult("There is currently no suitable COC replacement.");
    } else {
      setResult(`The medication to switch to is: ${result_med}`);
    }
  }, [result_med, navigate]);

  if (result === "") return null; // Prevent rendering until data is processed

  return (
    <>
      <div>
        <header className="result_header">Form Result:</header>
        <div>
          <body className="matched_result">{result}</body>
        </div>
      </div>
      <BackButton />
    </>
  );
}
export default Result;

import NavigationBar from "./components/NavigationBar";
import "./Result.css";

function Result(props) {
  return (
    <>
      <NavigationBar />
      <div>
        <header>Form Result:</header>
        <div>
          <body className="matched_result">
            The medication to switch to is: {props.result}.
          </body>
        </div>
      </div>
    </>
  );
}
export default Result;

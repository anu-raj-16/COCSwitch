import NavigationBar from "./components/NavigationBar";
import Form from "./Form";
import About from "./About";
import Home from "./Home";
import Result from "./Result";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="app_container">
        <Routes>
          <Route path="/COCSwitch/" element={<Home />} />
          <Route path="/COCSwitch/about" element={<About />} />
          <Route path="/COCSwitch/form" element={<Form />} />
          <Route path="/COCSwitch/result" element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

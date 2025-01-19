import NavigationBar from "./components/NavigationBar";
import Form from "./Form";
import About from "./About";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

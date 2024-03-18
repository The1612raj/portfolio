import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Projects from "./component/Projects";
import Home from "./component/Home";
import Header from "./component/Header";
import AboutMe from "./component/Aboutme";
import Sayhello from "./component/Sayhello";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Sayhello />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

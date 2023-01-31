import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useState } from "react";

function App() {
  const [inputText, setinputText] = useState("");

  return (
    <>
      <Router>
        <Navbar
          onSearch={(item) => {
            console.log(item);
            setinputText(item);
          }}
        />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home userInput={inputText} />} />
          <Route path="/general" element={<Hero cat="general" />} />
          <Route path="/business" element={<Hero cat="business" />} />
          <Route path="/entertainment" element={<Hero cat="entertainment" />} />
          <Route path="/health" element={<Hero cat="health" />} />
          <Route path="/science" element={<Hero cat="science" />} />
          <Route path="/sports" element={<Hero cat="sports" />} />
          <Route path="/technology" element={<Hero cat="technology" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

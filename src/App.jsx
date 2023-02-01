import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [inputText, setinputText] = useState("");

  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <Navbar
            onSearch={(item) => {
              console.log(item);
              setinputText(item);
            }}
          style />
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home userInput={inputText} />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* <Route exact path="/" element={<Home userInput={inputText} />} /> */}
            <Route
              path="/general"
              element={
                <ProtectedRoute>
                  <Hero cat="general" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/business"
              element={
                <ProtectedRoute>
                  <Hero cat="business" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/entertainment"
              element={
                <ProtectedRoute>
                  <Hero cat="entertainment" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/health"
              element={
                <ProtectedRoute>
                  <Hero cat="health" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/science"
              element={
                <ProtectedRoute>
                  <Hero cat="science" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sports"
              element={
                <ProtectedRoute>
                  <Hero cat="sports" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/technology"
              element={
                <ProtectedRoute>
                  <Hero cat="technology" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/technology"
              element={
                <ProtectedRoute>
                  <Hero cat="technology" />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;

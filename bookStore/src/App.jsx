import "./App.scss";
import logo from "./assets/logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookPage from "./components/BookPage";

function App() {
  return (
    <div className="container">
      <Router>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <HomePage />
        <Routes>
          <Route path="/book/:primary_isbn10" element={<BookPage />} />
        </Routes>
      </Router>
      <footer>
        <img src={logo} alt="logo" />
        <div className="container-footer">
          <p>
            &copy; 2024{" "}
            <a className="link" href="https://github.com/BeSomi22">
              BeSomi22
            </a>{" "}
            BookNook
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

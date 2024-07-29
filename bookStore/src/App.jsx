import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import BookPage from "./components/BookPage";

function App() {
  return (
    <Router basename="/bookStore">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="book/:primary_isbn10" element={<BookPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import bookData from "./books.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FirstSection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData.slice(3, 11));
  }, []);

  return (
    <div className="selling-section">
      <div className="heading">
        <div className="vertical"></div>
        <h1>Best Selling</h1>
      </div>
      <div className="wrapper">
        {books.map((book) => (
          <div key={book.primary_isbn10}>
            <Link to={`/book/${book.primary_isbn10}`}>
              <img src={book.image} alt={book.title} />
            </Link>
            <h3>{book.title}</h3>
            <p>{book.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

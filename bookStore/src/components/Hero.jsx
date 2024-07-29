import { useState, useEffect } from "react";
import booksData from "./books.json";
import { Link } from "react-router-dom";

export default function Hero() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData.slice(0, 3));
  }, []);
  return (
    <div className="hero">
      <div className="texture">
        <h2>New</h2> <h1>Release</h1>
        <p>Explore more books everyday</p>
      </div>
      <div className="new-release">
        {books.map((book, index) => (
          <div key={book.primary_isbn10}>
            <Link to={`/book/${book.primary_isbn10}`}>
              <img
                src={book.image}
                alt={book.title}
                className={index === 1 ? "special-book" : "regular-book"}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

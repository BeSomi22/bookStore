import { useState, useEffect } from "react";
import booksData from "./books.json";
import {Link} from 'react-router-dom'

export default function CallingForAction() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const filtredBooks = booksData.filter((book) => {
      const price = parseFloat(book.price?.replace?.("$", "") || 0);
      return price > 10;
    });

    const sortedBooks = filtredBooks.sort((a, b) => {
      const priceA = parseFloat(a.price?.replace?.("$", "") || 0);
      const priceB = parseFloat(b.price?.replace?.("$", "") || 0);
      return priceA - priceB;
    });

    setBooks(sortedBooks.slice(0, 2));
  }, []);

  return (
    <div className="cta">
      <div className="column1">
        {books.map((book, index) => (
          <div
            key={book.primary_isbn10}
            className={index === 0 ? "first-book" : "second-book"}
          >
            <Link to={`/book/${book.primary_isbn10}`}>
            <img src={book.image} alt={book.title} />

            </Link>
          </div>
        ))}
      </div>
      <div className="column2">
        {/* <p>20% Off Select Book</p>
        <button>Buy Now</button> */}
        <p>Discover new worlds and enrich your mind with every download. Start your next adventure today!</p>
      </div>
    </div>
  );
}

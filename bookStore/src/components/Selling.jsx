import booksData from "./books.json";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Selling() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const genres = Array.from(new Set(booksData.map((book) => book.genre)));

  useEffect(() => {
    if (selectedGenre) {
      const filtered = booksData.filter((book) => book.genre === selectedGenre);
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(booksData);
    }
  }, [selectedGenre]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const getFirst12Books = () => {
    return filteredBooks.slice(0, 12);
  };
  const getAllBooks = () => {
    return filteredBooks;
  };

  const displayBooks = showMore ? getAllBooks() : getFirst12Books();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="genres-container">
        <div className="heading">
          <div className="vertical"></div>
          <h1>Popular Genres</h1>
        </div>
        <Slider {...settings} className="genres-buttons">
          <button
            onClick={() => {
              setSelectedGenre("");
              setShowMore(false);
            }}
            className={selectedGenre === "" ? "active-button" : ""}
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => {
                setSelectedGenre(genre);
                setShowMore(false);
              }}
              className={selectedGenre === genre ? "active-button" : ""}
            >
              {genre}
            </button>
          ))}
        </Slider>
      </div>
      <ul className="list-wrapper">
        {displayBooks.map((book) => (
          <li key={book.primary_isbn10}>
            <Link to={`/book/${book.primary_isbn10}`}>
              <img src={book.image} alt={book.title} />
            </Link>
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          </li>
        ))}
      </ul>
      {!showMore && (
        <button onClick={handleShowMore} className="show-more-button">
          Show More
        </button>
      )}
    </div>
  );
}

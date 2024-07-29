import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import bookData from "./books.json";

export default function BookPage() {
  const { primary_isbn10 } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const foundBook = bookData.find(
      (book) => book.primary_isbn10 === primary_isbn10
    );
    setBook(foundBook);
  }, [primary_isbn10]);

  if (!book) {
    return <div>Loading...</div>;
  }

  // const handleDownload = (pdf)=>{
  //   const link = document.createElement('a');
  //   link.href = pdf;
  //   link.download= pdf.split('/').pop();
  //   document.body.appendChild(link);
  //   link.click();
  //   document.removeChild(link);
  // }
  const handleDownload = (downloadUrl)=>{
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download= downloadUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.removeChild(link);
  }

  return (
    <div className="book-details">
      <div className="image-container">
        <img src={book.image} alt={book.title} />
        <h1>{book.title}</h1>
        <div className="wrapper">
          <div className="vertical"></div>
          <div className="info-wrapper">
            <p>
              <strong>Author: </strong>
              {book.author}
            </p>
            <p>
              <strong>Publish Date: </strong>
              {book.publish_date}
            </p>
            <p className="description">
              <strong>Description: </strong>
              {book.description}
            </p>
          </div>
        </div>
      <button onClick={()=> handleDownload(book.downloadUrl)}>DownLoad Now</button>
      </div>
    </div>
  );
}

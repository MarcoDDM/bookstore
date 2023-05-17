import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import NewBookForm from './NewBookForm';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <div>
        {books.map((book) => (
          <Books
            key={book.id}
            genre={book.category}
            title={book.title}
            author={book.author}
            progress={book.progress}
            chapter={book.chapter}
          />
        ))}
      </div>
      <div>
        <NewBookForm />
      </div>
    </div>
  );
};

export default BookList;

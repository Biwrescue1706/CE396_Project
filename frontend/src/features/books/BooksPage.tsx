import { useEffect, useState } from 'react';
import { getBooks } from './bookServices';
import BookCard from '../../components/BookCard';

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Books</h2>
            <div>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BooksPage;

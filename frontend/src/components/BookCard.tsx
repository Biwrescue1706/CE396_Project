const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
        </div>
    );
};

export default BookCard;

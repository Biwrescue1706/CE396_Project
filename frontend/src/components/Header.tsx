import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Library Management System</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/users">Users</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
};

export default Header;

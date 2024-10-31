// frontend/src/pages/home.tsx
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-container">
            <h1>Welcome to the Library Management System</h1>
            <p>Please login or register to continue.</p>
            <div className="button-container">
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="register-button">Register</button>
                </Link>
            </div>
        </div>
    );
}

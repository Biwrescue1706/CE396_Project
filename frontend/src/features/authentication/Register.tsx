import { useState } from 'react';
import { registerUser } from './authServices';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        await registerUser({ username, password });
        // Handle registration success/failure
    };

    return (
        <form onSubmit={handleRegister}>
            <p>สมัครสมาชิก</p>
            <input type="text" value={username} onChange={(e) => 
                setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => 
                setPassword(e.target.value)} placeholder="Password" required />
            <input type="password" value={password} onChange={(e) => 
                setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;

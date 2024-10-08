import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice'; // Adjust the path to your auth slice

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Dispatch the login action
        dispatch(login({ email, password }))
            .unwrap() // Unwrap to handle success and error responses
            .then(() => {
                // Navigate to the home page on successful login
                navigate('/home');
            })
            .catch((error) => {
                // Handle error 
                console.error('Login failed:', error);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 mt-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Sign in to ShoppyGlobe</h2>
                <form onSubmit={handleLogin} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your password"
                            autoComplete="current-password" 
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">
                    Don not have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

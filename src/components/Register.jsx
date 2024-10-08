import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice"; 
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch the registration action
        dispatch(register(formData))
            .unwrap()
            .then(() => {
                // Navigate to the login page after successful registration
                navigate("/login");
            })
            .catch((error) => {
                console.error("Registration failed:", error);
                // Handle error
            });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded-md shadow-lg">
            <h2 className="text-2xl mb-4">Register to ShoppyGlobe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border rounded-md w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border rounded-md w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border rounded-md w-full p-2"
                        autoComplete="email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="border rounded-md w-full p-2"
                        autoComplete="current-password" 
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Sign Up</button>
            </form>
            <p className="mt-4">
                Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
            </p>
        </div>
    );
};

export default Register;

import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from 'axios'


function Login() {
    const [values , setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        // Run validation
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        // Only proceed if no validation errors
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    console.log("Login response:", res.data);
                    if (res.data.success) {
                        // Redirect to home page on successful login
                        navigate('/dashboard');
                    } else {
                        alert("Invalid email or password");
                    }
                })
                .catch(err => console.log("Axios error:", err));
        }
    };


return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
        <div className="d-flex w-75">
            {/* Image Section */}
            <div className="w-50" style={{ marginRight: '0px' }}>
                <img 
                    src="https://www.renewbuy.com/sites/default/files/2023-10/Asset%205%40300x%20%281%29.png" 
                    alt="Login Illustration" 
                    className="img-fluid h-100 rounded" 
                    style={{ objectFit: 'cover', height: '100%' }} 
                />
            </div>

            {/* Form Section */}
            <div className="bg-white p-5 rounded shadow-lg w-50 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center mb-4">
                    <i className="fas fa-user-circle" style={{ fontSize: '80px', color: '#333' }}></i>
                </div>
                <h2 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Welcome Back</h2>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className='mb-4'>
                        <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
                        <input type="email" placeholder="Enter your email" name='email' onChange={handleInput} className='form-control rounded' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter your password" name='password' onChange={handleInput} className='form-control rounded' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-primary w-100 rounded-pill' style={{ backgroundColor: '#0d6efd', border: 'none' }}>Log In</button>
                    <p className='text-center mt-3' style={{ fontSize: '0.9em', color: '#555' }}>Don't have an account? <Link to="/signup" style={{ color: '#0d6efd' }}>Sign up</Link></p>
                </form>
            </div>
        </div>
    </div>
);


}

export default Login;
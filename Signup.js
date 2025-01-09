import React,{useState}from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios'


function Signup(){

    const [values , setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Run validation and store results in a variable
        const validationErrors = Validation(values);
    
        // Log the errors to check if validation is correct
        console.log("Validation Errors:", validationErrors);
    
        // Only proceed if no validation errors
        if (Object.keys(validationErrors).length === 0) {
            console.log("No validation errors. Proceeding with signup request...");
    
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    if (res.data.success) {
                        // Redirect to home page on successful login
                        navigate('/login');
                    } else {
                        alert("Invalid email or password");
                    }
                    // console.log("Signup response:", res.data); // Log the response from the server
                    // navigate('/');
                })
                .catch(err => console.log("Axios error:", err));
        } else {
            console.log("Validation errors exist. Not submitting form.");
        }
    
        // Update errors state for display on form
        setErrors(validationErrors);
    };
  

return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
        <div className="d-flex w-75">
            {/* Image Section */}
            <div className="w-50" style={{ marginRight: '0px' }}> {/* Increased gap */}
                <img 
                    src="https://img.freepik.com/premium-vector/insurance-policy-illustration-concept-white-background_701961-3377.jpg" 
                    alt="Signup Illustration" 
                    className="img-fluid h-100 rounded"  // Set image height to match the form height
                    style={{ objectFit: 'cover', height: '100%' }} 
                />
            </div>

            {/* Form Section */}
            <div className="bg-white p-5 rounded shadow-lg w-50 d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="text-center mb-4">
                    <i className="fas fa-user-circle" style={{ fontSize: '80px', color: '#333' }}></i>
                </div>
                <h2 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Create Your Account</h2>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className='mb-4'>
                        <label htmlFor="name" className="form-label"><strong>Full Name</strong></label>
                        <input type="text" placeholder="Enter your name" name='name' onChange={handleInput} className='form-control rounded' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
                        <input type="email" placeholder="Enter your email" name='email' onChange={handleInput} className='form-control rounded' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" placeholder="Create a password" name='password' onChange={handleInput} className='form-control rounded' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-primary w-100 rounded-pill' style={{ backgroundColor: '#0d6efd', border: 'none' }}>Sign Up</button>
                    <p className='text-center mt-3' style={{ fontSize: '0.9em', color: '#555' }}>By signing up, you agree to our <a href='#' style={{ color: '#0d6efd' }}>terms and policies</a>.</p>
                    <div className='text-center mt-3'>
                        <Link to="/login" className='btn btn-outline-primary rounded-pill px-4'>Already have an account? Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

}

export default Signup;


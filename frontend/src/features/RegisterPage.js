import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = 'Please enter a valid first name.';
    if (!formData.last_name) newErrors.last_name = 'Please enter a valid last name.';
    if (!formData.email) {
      newErrors.email = 'Please enter a valid email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter a password.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setFormError('');

    // Simulate signup success
    setTimeout(() => {
      setLoading(false);
      navigate('/employeedata');
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="lg:w-1/2 flex justify-center items-center bg-green-900 text-white">
        <div className="text-center py-10 cursor-pointer" onClick={() => navigate('/')}>
          <img src="images/logo.png" alt="Logo" className="mx-auto w-32 mb-6" />
          <img src="images/login-pic.png" alt="Sign up Illustration" className="mx-auto w-1/2" />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center items-center px-8 py-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white">
          <h4 className="uppercase text-center text-lg font-bold mb-6">Sign Up Your Account</h4>

          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="first_name" className="block mb-1">First Name *</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className={`w-full h-12 px-3 border rounded ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter first name"
            />
            {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="last_name" className="block mb-1">Last Name *</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className={`w-full h-12 px-3 border rounded ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter last name"
            />
            {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-12 px-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password *</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full h-12 px-3 pr-10 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-3 text-gray-600"
              >
                <i className={`fa ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password *</label>
            <div className="relative">
              <input
                type={passwordVisible2 ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full h-12 px-3 pr-10 border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible2(!passwordVisible2)}
                className="absolute right-3 top-3 text-gray-600"
              >
                <i className={`fa ${passwordVisible2 ? 'fa-eye' : 'fa-eye-slash'}`}></i>
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Error Alert */}
          {formError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {formError}
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="text-center my-4">
              <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
            >
              Sign Up Now
            </button>
          </div>

          {/* Redirect to Login */}
          <p className="text-center text-sm">
            If you have an account?{' '}
            <Link to="/login" className="text-green-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

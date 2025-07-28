import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ import useNavigate

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formError, setFormError] = useState('');
  const navigate = useNavigate(); // ✅ create navigate instance

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Please enter email.';
    if (!formData.password) newErrors.password = 'Please enter password.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
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

    // Simulate login and redirect
    setTimeout(() => {
      setLoading(false);

      // Simulate login success and navigate to dashboard
      navigate('/dashboard'); // ✅ navigate to dashboard
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center bg-green-900 text-white">
        <div className="text-center py-10">
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className="mx-auto w-32" />
          </Link>
          <Link to="/" className="mt-8 block">
            <img src="images/login-pic.png" alt="Illustration" className="mx-auto w-1/2" />
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex justify-center items-center px-8 py-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white">
          <h4 className="uppercase text-center text-lg font-bold mb-6">Login your account</h4>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className={`w-full h-12 px-3 border rounded ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              value={formData.email}
              onChange={handleChange}
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
                placeholder="Enter password"
                className={`w-full h-12 px-3 pr-10 border rounded ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.password}
                onChange={handleChange}
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

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <button
              type="button"
              onClick={() => alert('Forgot Password')}
              className="text-green-600 hover:underline text-sm"
            >
              Forgot Password?
            </button>
          </div>

          {/* Loading Spinner */}
          {loading && (
            <div className="text-center my-4">
              <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          )}

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
            >
              Login Now
            </button>
          </div>

          {/* Error Alert */}
          {formError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {formError}
            </div>
          )}

          {/* Signup Prompt */}
          <p className="text-center text-sm">
            If you don't have an account?{' '}
            <Link to="/register" className="text-green-600 font-semibold hover:underline">
              SIGNUP
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

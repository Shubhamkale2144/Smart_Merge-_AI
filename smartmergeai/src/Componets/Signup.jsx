import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from "../Css/Signup.module.css";


const API_BASE_URL = 'http://localhost:5000';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 3 ? 'Name must be at least 3 characters' : '';
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email format' : '';
      case 'phone':
        return !/^\d{10}$/.test(value) ? 'Phone must be 10 digits' : '';
      case 'password':
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/[A-Z]/.test(value)) return 'Must contain at least one uppercase letter';
        if (!/[a-z]/.test(value)) return 'Must contain at least one lowercase letter';
        if (!/[0-9]/.test(value)) return 'Must contain at least one number';
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) return 'Must contain at least one special character';
        return '';
        
      case 'confirmPassword':
        if (value !== formData.password) return 'Passwords do not match';
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });

    const error = validateField(id, value);
    setFieldErrors({
      ...fieldErrors,
      [id]: error
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      setError('Please fix the form errors before submitting');
      return;
    }

    try {
      setIsLoading(true);
      
      const response = await axios.post(
        `${API_BASE_URL}/api/signup`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        }
      );

      if (response.status === 201) {
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
        
        // Show success message if needed
        alert('Registration successful! Please sign in with your new account.');
        
        // Navigate to login page immediately after successful registration
        navigate('/login');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.circle5}></div>

      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.header}>
            <h1>Let's Get Started</h1>
            <p>Please enter your details</p>
          </div>

          <form className={styles.signupForm} onSubmit={handleSubmit}>
            {error && <div className={styles.errorMessage}>{error}</div>}

            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                className={`${styles.inputField} ${fieldErrors.name ? styles.inputError : ''}`}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {fieldErrors.name && <div className={styles.fieldError}>{fieldErrors.name}</div>}
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`${styles.inputField} ${fieldErrors.email ? styles.inputError : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {fieldErrors.email && <div className={styles.fieldError}>{fieldErrors.email}</div>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className={`${styles.inputField} ${fieldErrors.phone ? styles.inputError : ''}`}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10 digits"
                  required
                />
                {fieldErrors.phone && <div className={styles.fieldError}>{fieldErrors.phone}</div>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <div className={styles.passwordWrapper}>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className={`${styles.inputField} ${fieldErrors.password ? styles.inputError : ''}`}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Min 6 characters"
                    required
                  />
                  <button
                    type="button"
                    className={styles.toggleButton}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {fieldErrors.password && <div className={styles.fieldError}>{fieldErrors.password}</div>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className={styles.passwordWrapper}>
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    id="confirmPassword" 
                    className={`${styles.inputField} ${fieldErrors.confirmPassword ? styles.inputError : ''}`}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className={styles.toggleButton}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {fieldErrors.confirmPassword && <div className={styles.fieldError}>{fieldErrors.confirmPassword}</div>}
              </div>
            </div>

            <button 
              type="submit" 
              className={styles.signupButton}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'SIGN UP'}
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.accountText}>
              Do you already have an account? {' '}
              <span><Link to="/login" className={styles.loginLink}>Sign In</Link></span>
            </p>
            <div className={styles.homeLink}>
              <Link to="/">Home</Link>
            </div>             
            <Link to="/PrivacyPolicy" className={styles.legalText}>Privacy Policy</Link> | 
            <Link to="/TermsOfService" className={styles.legalText}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
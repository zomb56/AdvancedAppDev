import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {  
      setEmailError('Please enter your email');
      return false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      setEmailError('Please enter a valid email');
      return false;
    }

    if (!password.trim()) {
      setPasswordError('Please enter a password');
      return false;
    }

    if (password.length < 8 || password.length > 15) {
      setPasswordError('Password must be between 8 and 15 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      if (email === 'admin@1234.com' && password === 'admin1234') {
        navigate('/admin'); // Redirect to the admin route
      } else {
        
        navigate('/home');
      }
    }
  };

  return (
    <div className="login-container">
      <section className="login-section">
        <div className="login">
          {/* <p className="add">
            Discipline yourself with  
          </p>
          <div className="type">Yoga.</div> */}
          <div className="lcontainer">
            <div className="welcome">
              <h1>Welcome to ZenVista</h1>
              <h4>Log in for more spiritual experiences.</h4>
              <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    // placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="error">{nameError}</label>
                {/* <label htmlFor="mobile">Mobile Number:</label>
                  <input type="tel" id="mobile" name="mobile" pattern="[0-9]*" maxLength="10" required /> */}
                <label htmlFor="password">Password:</label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    // placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {/* <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  >
                  {showPassword ? 'Hide' : 'Show'}
                  </button> */}
                  <label className="error">{passwordError}</label>

                <button type="submit">Login</button>
              </form>
              <div className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
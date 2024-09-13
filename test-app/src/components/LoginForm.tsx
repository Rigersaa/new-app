import React, { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/Forms.css';

interface LoginFormProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  onSignupClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsAuthenticated, onSignupClick }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (user.email === email && user.password === password) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a onClick={onSignupClick}>Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

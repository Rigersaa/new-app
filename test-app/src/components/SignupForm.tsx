import React, { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/Forms.css';

interface SignupFormProps {
  onLoginClick: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onLoginClick }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Signup successful! You can now log in.');
    onLoginClick(); 
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a onClick={onLoginClick}>Log In</a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login Successful!');
  };

  return (
    <div className="container">
      <h1>{t('Log In')}</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>{t('Email')}:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>{t('Password')}:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">{t('Log In')}</button>
      </form>
    </div>
  );
};

export default Login;

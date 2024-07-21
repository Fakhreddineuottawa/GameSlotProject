import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    alert('Sign Up Successful!');
  };

  return (
    <div className="container">
      <h1>{t('Sign Up')}</h1>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">{t('Sign Up')}</button>
      </form>
    </div>
  );
};

export default SignUp;

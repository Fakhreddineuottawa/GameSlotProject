// src/FAQ.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t('faqTitle')}</h1>
      <div>
        <h2>{t('faqQuestion1')}</h2>
        <p>{t('faqAnswer1')}</p>
      </div>
      <div>
        <h2>{t('faqQuestion2')}</h2>
        <p>{t('faqAnswer2')}</p>
      </div>
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQ;

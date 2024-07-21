import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    navigate('/order-confirmation');
  };

  return (
    <div className="container">
      <h1>{t('checkout')}</h1>
      {step === 1 && (
        <div className="checkout-step">
          <h2>1. {t('reviewDetails')}</h2>
          <p>Review the items in your cart.</p>
          <button onClick={handleNextStep}>{t('next')}</button>
        </div>
      )}
      {step === 2 && (
        <div className="checkout-step">
          <h2>2. {t('creditCard')}</h2>
          <p>{t('enterCardDetails')}</p>
          <input type="text" placeholder={t('cardNumber')} />
          <input type="text" placeholder={t('nameOnCard')} />
          <input type="text" placeholder={t('expiryDate')} />
          <input type="text" placeholder={t('cvv')} />
          <button onClick={handlePreviousStep}>{t('back')}</button>
          <button onClick={handleNextStep}>{t('next')}</button>
        </div>
      )}
      {step === 3 && (
        <div className="checkout-step">
          <h2>3. {t('confirm')}</h2>
          <p>{t('reviewDetails')}</p>
          <button onClick={handlePreviousStep}>{t('back')}</button>
          <button onClick={handleConfirm}>{t('confirm')}</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

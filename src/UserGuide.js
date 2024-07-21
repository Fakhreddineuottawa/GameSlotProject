// src/UserGuide.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const UserGuide = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t('userGuideTitle')}</h1>
      <p>{t('userGuideIntro')}</p>
      <h2>{t('objectivesTitle')}</h2>
      <p>{t('objectivesContent')}</p>
      <h2>{t('howToUseTitle')}</h2>
      <p>{t('howToUseContent')}</p>
    </div>
  );
};

export default UserGuide;

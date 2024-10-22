// src/components/HomePage.js
import { useRef } from 'react';
import { useTranslation } from 'react-i18next'; 
import SectionUn from './_Section1';
import SectionDeux from './_Section2';
import SectionTrois from './_Section3';
import SectionQuatre from './_Section4';
import SectionCinq from './_Section5';
import Footer from '../../components/_Footer';
import useParticles from '../../Hooks/useParticles';

const HomePage = () => {
  const { svgRef } = useParticles();
  const { t } = useTranslation(); 

  return (
    <>
      <div className="home-page">
        <div className="content" ref={useRef(null)}>
          <span>{t('data.homePage.title')}</span> 
          <p>{t('data.homePage.subtitle')}</p> 
          <span>{t('data.homePage.name')}</span> 
        </div>
        <svg width="100%" height="100%" id="svg" ref={svgRef}></svg>
      </div>
      <SectionUn />
      <SectionDeux />
      <SectionTrois />
      <SectionQuatre />
      <SectionCinq />
      <Footer />
    </>
  );
};

export default HomePage;

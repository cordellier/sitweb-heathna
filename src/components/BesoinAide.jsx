import { useTranslation } from 'react-i18next';

const BesoinAide = ({ pageId }) => {
  const { t } = useTranslation('helpData');

  return (
    <div className="besoin-aide-container">
      <h2>{t('ui.title')}</h2>
      <div className="help-content">
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {t(pageId)}
        </p>
      </div>
    </div>
  );
};

export default BesoinAide;
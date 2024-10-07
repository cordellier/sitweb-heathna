import PropTypes from 'prop-types';

const HeroSection = ({ title, subtitle, backgroundImage, video, cta }) => {
  return (
    <section id="hero" className="landing-section hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          {video && (
            <div className="hero-video">
              <video controls>
                <source src={video} type="video/mp4" />
                <track
                  kind="captions"
                  src="/path/to/captions.vtt"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {cta && (
            <a href={cta.link} className="cta-button">
              {cta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  video: PropTypes.string,
  cta: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default HeroSection;
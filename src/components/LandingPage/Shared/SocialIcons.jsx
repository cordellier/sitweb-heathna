import PropTypes from 'prop-types';

const SocialIcons = ({ socials }) => {
  return (
    <div className="social-icons">
      {socials.map((social) => (
        <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer">
          <img src={`/path/to/${social}-icon.svg`} alt={`${social} icon`} />
        </a>
      ))}
    </div>
  );
};

SocialIcons.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SocialIcons;
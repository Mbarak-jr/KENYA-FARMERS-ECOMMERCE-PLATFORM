import PropTypes from 'prop-types';

const LoadingSpinner = ({ fullPage = false, size = 'medium', className = '' }) => {
  const sizes = {
    small: 'h-5 w-5',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  const spinner = (
    <div className={`animate-spin rounded-full border-b-2 border-green-500 ${sizes[size]} ${className}`} />
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

LoadingSpinner.propTypes = {
  fullPage: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default LoadingSpinner;
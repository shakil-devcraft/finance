// src/components/Button.js
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import PropTypes from 'prop-types'; // ES6

const Button = ({ label = "Button", onClick = () => {}, variant = 'primary', className, disabled = false }) => {
  const baseStyle = 'px-4 py-2 rounded font-semibold focus:outline-none';
  const variantStyle = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90';

  // Combine classes using twMerge and clsx
  const buttonClassNames = twMerge(
    clsx(baseStyle, variantStyle, disabledStyle, className)
  );

  return (
    <button onClick={onClick} className={buttonClassNames} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary', 'disabled']),
};

export default Button;

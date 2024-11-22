
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import PropTypes from 'prop-types'; 

const GradientText = ({ text, className }) => {
    // gradient color defalt text
    const gradientText = "font-medium text-2xl md:text-[30px] lg:text-[40px] leading-[26px] md:leading-[35px] lg:leading-[56px] bg-gradient-to-r from-purpleStart to-purpleEnd text-transparent bg-clip-text";

    // merge custom classes
    const applyGradientText = twMerge(
        clsx(gradientText, className)
    )

    return (
        <h1 className={applyGradientText}>
        {text}
        </h1>
    );
};

GradientText.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default GradientText;

import PropTypes from "prop-types";

const Container = ({children}) => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10">
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;
// src/components/Navbar/Navbar.js
import PropTypes from "prop-types";
import Button from "../shares/Button/Button";
import Container from "../shares/Container/Container";

const Navbar = ({
  brand = "img/logo.png",
  brandClass = "text-2xl font-bold text-white",
}) => {

  return (
    <nav>
      <Container>
        <div className="py-2 flex items-center justify-between">
            {/* Brand */}
            <div className={brandClass}><img className="w-[200px]" src={brand} alt="" /></div>

            {/* button */}
            <Button label="Contact" className="font-mplus hover:text-white hover:border-white transition duration-150 text-[#772AB3] bg-transparent px-8 py-2 md:py-3 border-2 border-[#772AB3] rounded-full text-base font-normal" />
        </div>
      </Container>
    </nav>
  );
};

// PropTypes validation
Navbar.propTypes = {
  brand: PropTypes.string, // Brand text
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ), // Navigation links
  brandClass: PropTypes.string, // Tailwind class for the brand
  navClass: PropTypes.string, // Tailwind class for the navbar
  linkClass: PropTypes.string, // Tailwind class for navigation links
};

export default Navbar;

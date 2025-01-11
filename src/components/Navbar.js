import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // Toggle the mobile menu on and off
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-semibold">
            <Link to="/">
            <img
              src="assets/photos/WKA (final logo).png"
              alt="logo"
              className="w-24 h-auto ml-20"
            />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="nav">
            <div className="hidden md:flex space-x-14">
              <NavLink
                to="/"
                className="text-4xl text-olive font-semibold hover:text-green transition-colors duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-4xl text-olive font-semibold hover:text-green transition-colors duration-300"
              >
                About Us
              </NavLink>
              <NavLink
                to="/programs"
                className="text-4xl text-olive font-semibold hover:text-green transition-colors duration-300"
              >
                Programs
              </NavLink>
              <NavLink
                to="/enroll"
                className="text-4xl text-olive font-semibold hover:text-green transition-colors duration-300"
              >
                Enroll Now
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-5xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <NavLink to="/" className="block text-lg font-semibold">
              Home
            </NavLink>
            <NavLink to="/about" className="block text-lg font-semibold">
              About Us
            </NavLink>
            <NavLink to="/programs" className="block text-lg font-semibold">
              Programs
            </NavLink>
            <NavLink to="/enroll" className="block text-lg font-semibold">
              Enroll Now
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;

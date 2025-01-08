import { NavLink } from "react-router-dom"

function NavBar() {
   return (
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/programs">Programs</NavLink>
                    <NavLink to="/enroll">Enroll Now</NavLink>
                </nav>
            </div>

   )
}

export default NavBar;
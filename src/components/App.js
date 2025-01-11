import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer className="flex justify-between p-4 bg-navy text-white">
        <h5 className="footer-number">(770) 615-6207 | academy@worshipwithwonders.org</h5>
        <h5 className="footer-add">4665 Macland Rd, Powder Springs, GA 30127</h5>
      </footer>
    </div>
  );
}

export default App;

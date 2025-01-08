import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>
        <h5>(770)615-6207 | academy@worshipwithwonders.org</h5>
        <h5>4665 Macland Rd, Powder Springs, GA 30127</h5>
      </footer>
    </div>
   
  );
}

export default App;

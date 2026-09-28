import Navbar from "./Navbar";
import { Outlet } from "react-router";

/** The shared layout for all pages of the app */
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

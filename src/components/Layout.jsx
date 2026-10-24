import Nav from "./Nav";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "../pages/Footer";
const Layout = () => {
  return (
    <div className="flex w-full">
      <Nav />
      <div className="flex w-full flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

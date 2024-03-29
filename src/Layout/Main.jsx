import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

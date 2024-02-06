import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout, MdOutlineLogin } from "react-icons/md";
// import { FaTimes } from "react-icons/fa";

import logo from "../assets/monchobi.png";

import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const active = {
    color: "yellow",
    fontWeight: "bold",
  };

  const inactive = {
    color: "white",
  };

  const navItems = (
    <>
      <NavLink
        className="mr-6 "
        style={({ isActive }) => (isActive ? active : inactive)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="mr-6 "
        style={({ isActive }) => (isActive ? active : inactive)}
        to="/login"
      >
        Login
      </NavLink>

      <NavLink
        className="mr-6 "
        style={({ isActive }) => (isActive ? active : inactive)}
        to="/blogs"
      >
        Blogs
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-pink-800 shadow-xl sticky top-0 right-0 z-40 ">
      <div className="navbar-start">
        <div onClick={() => handleMenuOpen()} className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <GiHamburgerMenu color="white" size={26} />
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 -ml-2 z-[30] p-8 shadow bg-pink-800 w-56 my-3 rounded-br-xl rounded-bl-xl h-96 space-y-2"
            >
              {navItems}
            </ul>
          )}
        </div>
        <Link to="/" className=" w-24 text-xl">
          <img className="h-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="avatar m-1">
              <div className="w-11 rounded-full  ring-2 ring-neutral-800 ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-30 card card-compact w-64 p-2 shadow bg-white"
            >
              <div className="card-body items-center text-center">
                <img className="w-11 rounded-full " src={user.photoURL} />
                <h3 className="card-title">{user?.displayName}</h3>
                <p className="badge badge-neutral">{user?.email}</p>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm btn-outline"
                >
                  <MdLogout />
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? active : inactive)}
          >
            <button className="btn btn-outline text-white">
              <MdOutlineLogin size={22} />
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

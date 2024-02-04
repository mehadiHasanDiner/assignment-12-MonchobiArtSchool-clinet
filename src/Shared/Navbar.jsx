import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";

import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  console.log(user);

  const handleSignOut = () => {};

  const active = {
    color: "crimson",
    fontWeight: "bold",
  };

  const inactive = {
    color: "black",
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
        to="/allToys"
      >
        All Toys
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
    <div className="navbar bg-green-200 shadow-xl sticky top-0 z-40 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <GiHamburgerMenu size={26} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[30] p-6 shadow bg-green-100 rounded-box w-52 space-y-2"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className=" w-24 text-xl">
          {/* <img src={logo} alt="" /> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="avatar m-1">
              <div className="w-11 rounded-full  ring-2 ring-success ring-offset-base-100 ring-offset-2">
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
            to="/signIn"
            style={({ isActive }) => (isActive ? active : inactive)}
          >
            <button className="btn btn-sm">Sign In</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

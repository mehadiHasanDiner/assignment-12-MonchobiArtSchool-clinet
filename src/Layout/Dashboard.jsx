import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import useUserRole from "../hooks/useUserRole";
import DashboardTest from "../Pages/Dashboard/Dashboard/DashboardTest";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isSecuredRole] = useUserRole();
  const { logOut } = useAuth();
  console.log(isSecuredRole);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(true);

  const active = {
    color: "",
    background: "#be185d",
    fontWeight: "bold",
  };

  const inactive = {
    color: "black",
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="relative bg-pink-700 max-w-full py-2 font-bold flex pl-12 lg:pl-2 justify-between">
        <div className="flex">
          <AiFillDashboard size={24} color="white" />
          <span className="pl-2 text-white">
            {isSecuredRole === "admin" ? (
              "Admin"
            ) : (
              <>{isSecuredRole === "instructor" ? "Instructor" : "Student"}</>
            )}{" "}
            Dashboard
          </span>
        </div>
        <button
          onClick={handleLogOut}
          className="px-2 mr-2 btn btn-xs  hover:bg-pink-600  hover:rounded-md"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Page content here */}
          <div className="px-8 my-2">
            {location.pathname === "/dashboard" ? (
              <DashboardTest></DashboardTest>
            ) : (
              <Outlet></Outlet>
            )}
          </div>

          <label
            onClick={handleMenuOpen}
            htmlFor="my-drawer-2"
            className=" absolute -top-9 left-1 cursor-pointer hover:bg-pink-600  px-2 py-1 drawer-button lg:hidden rounded"
          >
            {menuOpen ? (
              <IoMdMenu color="white" size={24} />
            ) : (
              <RxCross2 color="white" size={24} />
            )}
          </label>
        </div>

        <div className="drawer-side mt-10 lg:mt-0 ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-48 min-h-full bg-pink-200 text-base-content ">
            {/* Sidebar content here */}

            <li className="mb-2">
              <Link to="/dashboard">Dashboard Home</Link>
            </li>

            {isSecuredRole === "admin" ? (
              <>
                {/* for admin */}
                <li>
                  <NavLink
                    style={({ isActive }) => (isActive ? active : inactive)}
                    to="allusers"
                  >
                    Manage Users
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    style={({ isActive }) => (isActive ? active : inactive)}
                    to="allclasses"
                  >
                    Manage Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {isSecuredRole === "instructor" ? (
                  <>
                    <li>
                      <NavLink
                        style={({ isActive }) => (isActive ? active : inactive)}
                        to="addclass"
                      >
                        Add a Class
                      </NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink
                        style={({ isActive }) => (isActive ? active : inactive)}
                        to="myclass"
                      >
                        My Class
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    {/* for student or normal user */}
                    <li className="my-2">
                      <NavLink
                        style={({ isActive }) => (isActive ? active : inactive)}
                        to="selectedClass"
                      >
                        Selected Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={({ isActive }) => (isActive ? active : inactive)}
                        to="enrolledClass"
                      >
                        Enrolled Classes
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}

            {/* common for all */}
            <hr className="border-t-2 border-gray-500 my-4"></hr>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import { TfiMenuAlt } from "react-icons/tfi";
import { PiStudentBold } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const active = {
    color: "",
    fontWeight: "bold",
  };

  const inactive = {
    color: "black",
  };

  return (
    <>
      <div className="relative bg-slate-300 max-w-full py-2 font-bold flex pl-3">
        <PiStudentBold size={24} />{" "}
        <span className="pl-2">Student Dashboard</span>
      </div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Page content here */}
          <div className="px-8 my-2">
            <Outlet></Outlet>
          </div>

          <label
            htmlFor="my-drawer-2"
            className=" absolute -top-9 right-3 cursor-pointer hover:bg-slate-500 hover:text-white px-2 py-1 drawer-button lg:hidden rounded"
          >
            <TfiMenuAlt size={24} />
          </label>
        </div>

        <div className="drawer-side mt-10 lg:mt-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-48 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

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

            {/* for admin */}
            <li className="my-2">
              <NavLink
                style={({ isActive }) => (isActive ? active : inactive)}
                to="allusers"
              >
                All Users
              </NavLink>
            </li>

            {/* common for all */}
            <hr className="border-t-2 border-gray-300 my-4"></hr>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

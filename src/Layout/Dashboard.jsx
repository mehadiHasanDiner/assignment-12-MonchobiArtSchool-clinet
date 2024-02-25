import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AiFillDashboard } from "react-icons/ai";
import useUserRole from "../hooks/useUserRole";

const Dashboard = () => {
  // const isUser = false;
  // const isInstructor = false;
  // const isAdmin = true;

  const { user } = useAuth();
  const role = useUserRole(user?.email);
  console.log(role);

  const active = {
    color: "",
    fontWeight: "bold",
  };

  const inactive = {
    color: "black",
  };

  return (
    <>
      <div className="relative bg-pink-700 max-w-full py-2 font-bold flex pl-3">
        <AiFillDashboard size={24} color="white" />
        <span className="pl-2 text-white">
          {role === "admin" ? (
            "Admin"
          ) : (
            <>{role === "instructor" ? "Instructor" : "Student"}</>
          )}{" "}
          Dashboard
        </span>
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
            className=" absolute -top-9 right-3 cursor-pointer hover:bg-pink-600  px-2 py-1 drawer-button lg:hidden rounded"
          >
            <TfiMenuAlt color="white" size={24} />
          </label>
        </div>

        <div className="drawer-side mt-10 lg:mt-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-48 min-h-full bg-pink-200 text-base-content">
            {/* Sidebar content here */}

            {role === "admin" ? (
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
                {role === "instructor" ? (
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

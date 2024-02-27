import { Link } from "react-router-dom";

const DashboardTest = () => {
  return (
    <div className=" m-auto w-1/2 md:w-1/3 bg-pink-100 rounded-xl border-pink-600 border-2 p-4 mt-10">
      <div>
        <h3 className="text-3xl font-bold text-center underline ">
          For Testing Purpose
        </h3>
        <div className="space-y-3">
          <p className="text-2xl font-bold text-center bg-pink-600 text-white p-3 rounded-badge my-6">
            Role: Admin
          </p>
          <p className="text-xl font-bold text-center">
            Email: shakib@email.com
          </p>
          <p className="text-xl font-bold text-center">Password: 123Aa#</p>

          <p className="italic text-center">
            N.B. Add more new classes as an instructor after changing the user
            role as instructor. For changing the user role please go to{" "}
            <span className="text-pink-700">
              <Link to="allusers">Manage Users</Link>
            </span>{" "}
            section
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTest;

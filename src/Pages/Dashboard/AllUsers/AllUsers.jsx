import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { MdDeleteForever } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiChalkboardTeacher } from "react-icons/pi";
import Swal from "sweetalert2";
import { makeAdmin, makeInstructor } from "../../../hooks/useApi/useApi";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_URL_KEY}/users`);
      return res.json();
    },
  });

  const handleDeleteUser = (user) => {
    console.log(user);
  };

  const handleMakeAdmin = (user) => {
    makeAdmin(user?.email).then((data) => {
      console.log(data);
      if (data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleMakeInstructor = (user) => {
    makeInstructor(user?.email).then((data) => {
      console.log(data);
      if (data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is Instructor Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>All Users | Monchobi Art School </title>
      </Helmet>
      <h3 className="text-2xl font-bold">Total Users: {users?.length} </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <p className="font-bold">Admin</p>
                  ) : (
                    <>
                      {user?.role === "instructor" ? (
                        ""
                      ) : (
                        <button
                          className="btn bg-orange-200 btn-outline btn-xs"
                          onClick={() => handleMakeAdmin(user)}
                        >
                          <MdAdminPanelSettings /> Admin
                        </button>
                      )}
                    </>
                  )}
                  {user?.role === "instructor" ? (
                    <p className="font-bold">Instructor</p>
                  ) : (
                    <>
                      {user?.role === "admin" ? (
                        ""
                      ) : (
                        <button
                          className="btn bg-orange-200 btn-outline btn-xs ml-2"
                          onClick={() => handleMakeInstructor(user)}
                        >
                          <PiChalkboardTeacher /> Instructor
                        </button>
                      )}
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn bg-red-600  btn-outline"
                  >
                    <MdDeleteForever size={18} color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

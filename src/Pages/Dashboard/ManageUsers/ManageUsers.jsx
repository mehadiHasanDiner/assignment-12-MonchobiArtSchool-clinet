import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiChalkboardTeacher } from "react-icons/pi";
import Swal from "sweetalert2";
import { makeAdmin, makeInstructor } from "../../../hooks/utils/useApi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await useAxiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    makeAdmin(user?.email).then((data) => {
      console.log(data);
      if (data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: "crimson",
          title: `${user.name} is Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
          background: "purple",
          color: "white",
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
          iconColor: "crimson",

          title: `${user.name} is Instructor Now!`,
          showConfirmButton: false,
          timer: 1500,
          background: "purple",
          color: "white",
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
              <th> User Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photoURL} alt="Class Theme Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <p className="font-bold flex items-center gap-1">
                      {" "}
                      <MdAdminPanelSettings size={20} /> Admin
                    </p>
                  ) : (
                    <>
                      {user?.role === "instructor" ? (
                        ""
                      ) : (
                        <button
                          className="btn bg-orange-200 btn-outline btn-sm"
                          onClick={() => handleMakeAdmin(user)}
                        >
                          <MdAdminPanelSettings size={16} /> Admin
                        </button>
                      )}
                    </>
                  )}
                  {user?.role === "instructor" ? (
                    <p className="font-bold flex items-center gap-1">
                      <PiChalkboardTeacher size={20} />
                      Instructor
                    </p>
                  ) : (
                    <>
                      {user?.role === "admin" ? (
                        ""
                      ) : (
                        <button
                          className="btn bg-orange-200 btn-outline btn-sm ml-2"
                          onClick={() => handleMakeInstructor(user)}
                        >
                          <PiChalkboardTeacher size={16} /> Instructor
                        </button>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

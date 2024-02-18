import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { MdDeleteForever } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

const AllUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_URL_KEY}/users`);
      return res.json();
    },
  });

  const handleDeleteUser = (user) => {
    console.log(user);
  };

  const handleMakeAdmin = (user) => {};
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
              <th>Role</th>
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
                    "Admin"
                  ) : (
                    <button
                      className="btn bg-green-500 btn-outline"
                      onClick={() => handleMakeAdmin()}
                    >
                      <MdAdminPanelSettings size={26} />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost bg-red-600  hover:bg-orange-600"
                  >
                    <MdDeleteForever size={20} color="white" />
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

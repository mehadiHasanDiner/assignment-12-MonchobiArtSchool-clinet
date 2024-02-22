import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyClass = () => {
  const [myClasses, setMyClasses] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_KEY}/allClasses/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div>
      <p className=" font-bold text-2xl text-pink-600">
        Total Added Class: {myClasses.length}
      </p>
      <div className="flex justify-between mt-6">
        <p className="text-center font-bold  ">
          Instructor Name: {user?.displayName}
        </p>
        <p className="text-center font-bold ">Email: {user?.email}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-pink-600 text-white">
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Title </th>
              <th>Available seats</th>
              <th>Reg. Fee</th>
              <th>Status & Feedback</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((myClass, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img src={myClass?.img} alt="Class Theme Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{myClass?.nameOfClass} </div>
                    </div>
                  </div>
                </td>
                <td>{myClass?.availableSeat}</td>
                <td>${myClass?.feeAmount}</td>
                <td className=" mt-6">
                  <p
                    className={
                      myClass?.status === "Approved"
                        ? "capitalize badge badge-success mt-6"
                        : myClass?.status === "Denied"
                        ? "capitalize badge badge-error mt-6"
                        : "capitalize badge badge-warning mt-6"
                    }
                  >
                    {myClass?.status}
                  </p>
                  <p className="italic mt-2 ml-2">{myClass?.feedback}</p>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;

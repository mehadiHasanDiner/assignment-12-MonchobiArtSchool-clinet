import { useQuery } from "@tanstack/react-query";
import {
  sendFeedback,
  setApprovedDenied,
} from "../../../hooks/utils/useStatus";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {
  // const [sendFeedback, setSendFeeback] = useState("");
  const { refetch, data: allClassesData = [] } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_URL_KEY}/allClasses`);
      return res.json();
    },
  });

  const handleApproveClass = (id) => {
    setApprovedDenied(id, "Approved").then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: "#fabee4",
          title: "Status Updated Successfully",
          showConfirmButton: false,
          timer: 2000,
          background: "purple",
          color: "white",
        });
      }
      refetch();
    });
  };

  const handleDenyClass = (id) => {
    setApprovedDenied(id, "Denied").then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: "#fabee4",
          title: "Status Updated Successfully",
          showConfirmButton: false,
          timer: 2000,
          background: "crimson",
          color: "white",
        });
      }
      refetch();
    });
  };

  const handleFeedbackClass = (id) => {
    sendFeedback(id, "sendFeedback").then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <p className="text-center text-2xl font-bold capitalize text-pink-700 my-6">
        All class list added by Instructors
      </p>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-pink-600 text-white">
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Title </th>
              <th>Instructor name</th>
              <th>Instructor Email</th>
              <th>Available seats</th>
              <th>Reg. Fee</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClassesData.map((classData, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img src={classData?.img} alt="Class Theme Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{classData?.nameOfClass} </div>
                    </div>
                  </div>
                </td>
                <td>{classData?.instructor}</td>
                <td>{classData?.email}</td>
                <td>{classData?.availableSeat}</td>
                <td>${classData?.feeAmount}</td>
                <td
                  className={
                    classData?.status === "Approved"
                      ? "capitalize badge badge-success mt-6 text-white"
                      : classData?.status === "Denied"
                      ? "capitalize badge badge-error mt-6 text-white"
                      : "capitalize badge badge-warning mt-6"
                  }
                >
                  {classData?.status}
                </td>
                <th>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleApproveClass(classData?._id)}
                      className={
                        classData?.status === "Denied" ||
                        classData?.status === "Approved"
                          ? "btn btn-xs btn-disabled"
                          : "btn btn-outline btn-success btn-xs"
                      }
                    >
                      Approved
                    </button>
                    <button
                      onClick={() => handleDenyClass(classData?._id)}
                      className={
                        classData?.status === "Denied" ||
                        classData?.status === "Approved"
                          ? "btn btn-xs btn-disabled"
                          : "btn btn-outline btn-success btn-xs"
                      }
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => handleFeedbackClass(classData?._id)}
                      className="btn btn-outline btn-primary btn-xs"
                    >
                      Feedback
                    </button>
                  </div>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

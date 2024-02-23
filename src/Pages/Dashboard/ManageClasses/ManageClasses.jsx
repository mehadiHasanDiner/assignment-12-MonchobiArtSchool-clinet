import {
  sendFeedback,
  setApprovedDenied,
} from "../../../hooks/utils/useStatus";
import Swal from "sweetalert2";
import ClassTableRow from "./ClassTableRow";
import usePostedClass from "../../../hooks/usePostedClass";
import { useState } from "react";

const ManageClasses = () => {
  const [allClassesData, refetch] = usePostedClass();
  const [feedbackText, setFeedbackText] = useState("");

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

  const handleFeedbackClass = (id, abc) => {
    // sendFeedback(id).then((data) => {});

    console.log(id, abc());
  };

  return (
    <>
      <div>
        <p className="text-center text-2xl font-bold capitalize text-pink-700 my-6">
          All class list added by Instructors
        </p>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-pink-600 text-white">
                <th>Cl. code</th>
                <th>Cl. Image</th>
                <th>Cl. Title </th>
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
                <ClassTableRow
                  classData={classData}
                  key={index}
                  handleApproveClass={handleApproveClass}
                  handleDenyClass={handleDenyClass}
                  handleFeedbackClass={handleFeedbackClass}
                  setFeedbackText={setFeedbackText}
                ></ClassTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;

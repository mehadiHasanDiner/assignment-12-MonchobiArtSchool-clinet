import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const EnrolledClass = () => {
  const [enrollmentData, setEnrollmentData] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.get(`/enrollment/${user?.email}`).then((res) => {
      res.data;
      setEnrollmentData(res.data);
    });
  }, [user, axiosSecure]);

  return (
    <div>
      <p className="text-xl font-bold">Order History</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enrollmentData.map((enroll, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{enroll?.nameOfClass}</td>
                <td>{enroll?.feeAmount}</td>
                <td>
                  <p className="badge badge-success text-white">
                    {enroll?.status}
                  </p>
                </td>
                <td>{enroll?.date.toString().split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;

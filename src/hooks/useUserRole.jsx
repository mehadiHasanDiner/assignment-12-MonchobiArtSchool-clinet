import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = (email) => {
  const [axiosSecure] = useAxiosSecure();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      await axiosSecure
        .get(`/users/${email}`)
        .then((response) => {
          const user = response.data;
          setRole(user?.role);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    };

    fetchRole();
  }, [axiosSecure, email]);

  return role;
};

export default useUserRole;

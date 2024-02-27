import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: isSecuredRole, isLoading: isSecuredRoleLoading } = useQuery({
    queryKey: ["isInstructorOrAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      console.log("is admin res", res);
      return res.data.role;
    },
  });
  return [isSecuredRole, isSecuredRoleLoading];
};

export default useUserRole;

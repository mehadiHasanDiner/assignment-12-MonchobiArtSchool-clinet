import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: isSecuredRole, isLoading: isSecuredRoleLoading } = useQuery({
    queryKey: ["isSecuredRole", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      console.log("is admin res", res);
      return res.data.role;
    },
  });
  return [isSecuredRole, isSecuredRoleLoading];
};

export default useUserRole;

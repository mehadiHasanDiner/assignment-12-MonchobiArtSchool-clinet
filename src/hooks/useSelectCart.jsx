import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: selectedCart = [] } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [selectedCart, refetch];
};

export default useSelectCart;

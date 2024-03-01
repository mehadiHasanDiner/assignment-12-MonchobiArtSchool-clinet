import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectCart = () => {
  const { user, loading } = useAuth();
  // const [axiosSecure] = useAxiosSecure();

  const { refetch, data: selectedCart = [] } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_URL_KEY}/selected?email=${user?.email}`
      );
      // console.log("res from axios", res);
      return res.json();
    },
  });
  return [selectedCart, refetch];
};

export default useSelectCart;

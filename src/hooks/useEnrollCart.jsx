import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useEnrollCart = () => {
  const { user } = useAuth();
  const { refetch, data: enrolledCart = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_URL_KEY}/enrolled?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [enrolledCart, refetch];
};

export default useEnrollCart;

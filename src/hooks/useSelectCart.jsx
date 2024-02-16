import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectCart = () => {
  const { user } = useAuth();
  const { refetch, data: selectedCart = [] } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_URL_KEY}/selected?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [selectedCart, refetch];
};

export default useSelectCart;

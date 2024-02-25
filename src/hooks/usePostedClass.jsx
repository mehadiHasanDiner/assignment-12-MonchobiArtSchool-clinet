import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePostedClass = () => {
  const { refetch, data: allClassesData = [] } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await useAxiosSecure.get("/allClasses");
      return res.data;
    },
  });
  return [allClassesData, refetch];
};

export default usePostedClass;

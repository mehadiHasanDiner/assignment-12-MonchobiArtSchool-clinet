import { useQuery } from "@tanstack/react-query";

const usePostedClass = () => {
  const { refetch, data: allClassesData = [] } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_URL_KEY}/allClasses`);
      return res.json();
    },
  });
  return [allClassesData, refetch];
};

export default usePostedClass;

import axios, { AxiosPromise } from "axios";
import BookEntity from "../interface/bookEntity";
import { useQuery } from "@tanstack/react-query";

// const API_URL = "http://localhost:3333/books";
const API_URL = import.meta.env.VITE_BASE_URL;

const fetchData = async (): AxiosPromise<BookEntity> => {
  const response = await axios.get(API_URL);
  return response;
};

function useBookData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["book-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data.data,
  };
}

export default useBookData;

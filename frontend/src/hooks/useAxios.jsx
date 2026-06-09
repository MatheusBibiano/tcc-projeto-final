import useSWR from "swr";
import { axiosAPI } from "../services/axios";

export function useAxios(url) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const response = await axiosAPI.get(url);
    return response.data;
  });

  return { data, error, mutate };
}

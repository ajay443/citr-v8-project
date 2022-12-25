import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  // es21 new feature ?? = means, if any error return []
  return [results?.data?.breeds ?? [], results.status];
}

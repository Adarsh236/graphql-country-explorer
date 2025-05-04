import { useCountriesQuery } from "../../../graphql/generated/graphql";

export function useCountries() {
  const { data, loading, error } = useCountriesQuery();
  return {
    countries: data?.countries ?? [],
    loading,
    error,
  };
}

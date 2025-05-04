import React, { useMemo } from "react";
import { useCountries } from "./hooks/use-countries";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FilterBar } from "../../components/molecules/filter-bar";
import { setFilter } from "./countries-slice";
import { CountryTable } from "../../components/organisms/country-table";

export const CountriesPage: React.FC = () => {
  const { countries, loading, error } = useCountries();
  const filter = useAppSelector((s) => s.countries.filter);
  const dispatch = useAppDispatch();

  const filtered = useMemo(
    () =>
      countries.filter((c) =>
        c.code.toLowerCase().includes(filter.trim().toLowerCase())
      ),
    [countries, filter]
  );

  if (loading)
    return <p className="text-center mt-12 animate-pulse">Loading…</p>;
  if (error)
    return <p className="text-center mt-12 text-red-600">{error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-primary">
        Country Explorer
      </h1>
      <FilterBar
        value={filter}
        onChange={(code) => dispatch(setFilter(code))}
      />
      <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-40">
        <CountryTable data={filtered} />
      </div>
    </div>
  );
};

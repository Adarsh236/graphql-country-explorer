import React from "react";
import type { CountriesQuery } from "../../graphql/generated/graphql";

interface Props {
  data: CountriesQuery["countries"];
}

export const CountryTable: React.FC<Props> = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow rounded">
      <thead>
        <tr className="text-left border-b">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Code</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c) => (
          <tr key={c.code} className="hover:bg-gray-50">
            <td className="px-4 py-2">{c.name}</td>
            <td className="px-4 py-2 font-mono">{c.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

import React from "react";
import { Input } from "../atoms/input";

interface Props {
  value: string;
  onChange(code: string): void;
}

export const FilterBar: React.FC<Props> = ({ value, onChange }) => (
  <div className="mb-4">
    <Input
      placeholder="Filter by country code"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

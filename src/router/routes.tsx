import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { CountriesPage } from "../features/countries/countries-page";
import { Dashboard } from "../layout/dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<CountriesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

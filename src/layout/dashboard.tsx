import { Outlet } from "react-router";
import { Header } from "./header";

export const Dashboard: React.FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);

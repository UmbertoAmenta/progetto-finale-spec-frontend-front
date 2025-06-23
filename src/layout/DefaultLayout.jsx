import { Outlet } from "react-router-dom";

// components
import Header from "../components/header";
import Menu from "../components/Menu";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="layout-m_o">
        <Menu />
        <Outlet />
      </div>
    </>
  );
}

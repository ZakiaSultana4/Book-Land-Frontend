import React from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import sideBarGenerator from "../../Utils/sideBarGenerator";
import AdminRoutes from "../../Routes/AdminRoutes";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { getUser, logOut } from "../../Redux/Features/Auth/authSlice";
import { Home, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
const Sidebar: React.FC = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  let sideBarItems = [];
  if (user?.role === "admin") {
    sideBarItems = sideBarGenerator(AdminRoutes);
  } else {
    sideBarItems = [
      {
        key: "dashboard",
        label: "Dashboard",
      },
    ];
  }
  // console.log(sideBarItems);
  const currentPath = location.pathname.split("/").pop();
  const defaultKey = AdminRoutes.find(
    (route) => route.path === currentPath
  )?.path;
  return (
    <Sider
      breakpoint="lg"
      className="bg-white shadow-md "
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ position: "sticky", height: "100vh", top: 0, padding: "7px" }}
    >
      <div
        style={{
          height: "32px",
          margin: "16px",
          color: "#fff",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-2xl font-semibold text-[#e12503] text-left w-full">
          Book Bliss
        </h1>
      </div>
      <Menu
        className="!bg-transparent [&>*]:bg-[#e12503] [&>*]:text-white"
        defaultSelectedKeys={[defaultKey || "dashboard"]}
        items={sideBarItems}
      />
      <div className="absolute bottom-3 lg:left-6 ">
        <Link className="flex gap-2 items-center my-3" to="/">
          <Home className="text-[#e12503]" />
          <span className="text-[#e12503] text-lg">Home</span>
        </Link>
        <button
          className="flex gap-2 items-center mt-3"
          onClick={() => dispatch(logOut())}
        >
          <LogOut className="text-[#e12503]" />
          <span className="text-[#e12503] text-lg">Logout</span>
        </button>
      </div>
    </Sider>
  );
};

export default Sidebar;

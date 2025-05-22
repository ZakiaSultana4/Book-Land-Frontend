import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import DasahboardTopBar from "./DasahboardTopBar";

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout className="bg-[#f9fafb]">
        <Header style={{ padding: 0 }} className="bg-transparent">
          <DasahboardTopBar />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

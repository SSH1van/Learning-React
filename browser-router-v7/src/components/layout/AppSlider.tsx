import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useNavigate, useLocation } from "react-router";

const { Sider } = Layout;

export default function AppSlider({ collapsed }: { collapsed: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedKey = () => {
    switch (location.pathname) {
      case "/":
        return "1";
      case "/orders":
        return "2";
      case "/delivery":
        return "3";
      default:
        return "";
    }
  };

  function handleChangePage(to: string) {
    navigate(to);
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[getSelectedKey()]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Главная",
            onClick: () => navigate("/"),
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Link to={"/orders?sort=desc"}>Заказы</Link>,
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Доставка",
            onClick: () => handleChangePage("/delivery"),
          },
        ]}
      />
    </Sider>
  );
}
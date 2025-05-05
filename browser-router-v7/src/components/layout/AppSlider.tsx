import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

export default function AppSlider({ collapsed }: { collapsed: boolean }) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Главная",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Заказы",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Доставка",
          },
        ]}
      />
    </Sider>
  );
}

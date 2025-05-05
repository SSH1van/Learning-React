import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { Dispatch, SetStateAction } from "react";
import DropdownMenu from "../DropdownMenu";

const { Header } = Layout;

interface AppHeaderProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export default function AppHeader({ collapsed, setCollapsed }: AppHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: "0 1rem 0 0",
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <DropdownMenu />
    </Header>
  );
}

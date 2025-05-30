import { Layout, theme } from "antd";
import AppRoutes from "../../routes/routes";

const { Content } = Layout;

export default function AppContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <AppRoutes />
    </Content>
  );
}

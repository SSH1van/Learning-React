import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppSlider from "./AppSlider";
import AppContent from "./AppContent";
import { useCrypto } from "../../context/crypto-context";

export default function AppLayout() {
  const { loading } = useCrypto();

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSlider />
        <AppContent />
      </Layout>
    </Layout>
  );
}

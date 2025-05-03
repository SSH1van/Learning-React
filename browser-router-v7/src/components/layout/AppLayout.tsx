import { useState } from "react";
import { Layout } from "antd";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSlider from "./AppSlider";

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{height: "100vh"}}>
      <AppSlider collapsed={collapsed}/>
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <AppContent />
      </Layout>
    </Layout>
  );
}

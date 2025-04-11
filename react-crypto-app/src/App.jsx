import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppSlider from "./components/layout/AppSlider";
import AppContent from "./components/layout/AppContent";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSlider/>
        <AppContent/>
      </Layout>
    </Layout>
  );
}

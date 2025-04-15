import { Layout } from "antd";
import AppHeader  from "./components/layout/AppHeader";
import AppSlider from "./components/layout/AppSlider";
import AppContent from "./components/layout/AppContent";
import { CryptoContextProvider } from "./context/crypto-context";

export default function App() {
  return (
    <CryptoContextProvider>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSlider />
          <AppContent />
        </Layout>
      </Layout>
    </CryptoContextProvider>
  );
}

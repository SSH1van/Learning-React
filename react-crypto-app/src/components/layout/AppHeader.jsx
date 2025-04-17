import { Layout, Select, Space, Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useCrypto } from "../../context/crypto-context";
import CoinInfoModal from "./CoinInfoModal";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);
  const { crypto } = useCrypto();

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === "/") {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  function handleSelect(value) {
    setCoin(crypto.find(c => c.id === value))
    setModal(true);
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{ width: 250 }}
        open={select}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        value={select ? "presss / to close" : "presss / to open"}
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(options) => (
          <Space>
            <img
              src={options.data.icon}
              alt={options.data.label}
              style={{ width: 25 }}
            />
            {options.data.label}
          </Space>
        )}
      />
      <Button type="primary">Add Asset</Button>

      <Modal open={modal} footer={null} onCancel={() => setModal(false)}>
        <CoinInfoModal coin={coin}></CoinInfoModal>
      </Modal>
    </Layout.Header>
  );
}

import { Select, Space, Flex, Divider, Typography } from "antd";
import { useState } from "react";
import { useCrypto } from "../context/crypto-context";

export default function AddAssetForm() {
  const [coin, setCoin] = useState(null);
  const { crypto } = useCrypto();

  if (!coin) {
    return (
      <Select
        style={{ width: "100%" }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder="Select coin"
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
    );
  }
  return (
    <form>
      <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.id}
          style={{ width: 40, marginRight: "1rem" }}
        />
        <Typography.Title level={2} style={{ margin: 0 }}>
          {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
    </form>
  );
}

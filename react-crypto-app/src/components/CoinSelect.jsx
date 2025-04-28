import { Select, Space } from "antd";

export default function CoinSelect({
  crypto,
  ...props
}) {
  return (
    <Select
      {...props}
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

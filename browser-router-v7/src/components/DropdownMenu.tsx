import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Мой профиль",
  },
  {
    key: "2",
    label: "Настрйоки",
  },
  {
    key: "3",
    label: "Выход",
    danger: true,
  },
];

export default function DropdownMenu() {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Меню
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

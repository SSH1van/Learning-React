import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router";

export default function DropdownMenu() {
  const navigate = useNavigate();
  function handleLogout() {
    console.log("Logout");
  }
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={"/my-profile"}>Мой профиль</Link>,
    },
    {
      key: "2",
      label: "Настрйоки",
      onClick: () => navigate("/settings"),
    },
    {
      key: "3",
      label: "Выход",
      danger: true,
      onClick: handleLogout
    },
  ];
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

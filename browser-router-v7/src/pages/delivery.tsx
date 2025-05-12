import { Button, Typography } from "antd";
import { useNavigate } from "react-router";

export default function Delivery() {
  const navigate = useNavigate();
  return (
    <>
      <Typography.Title level={4}>Доставка</Typography.Title>
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </>
  );
}

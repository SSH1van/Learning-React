import { Typography } from "antd";
import { useParams } from "react-router";

export default function MyProfile() {
  const { userId } = useParams();
  return <Typography.Title level={4}>Мой профиль {userId}</Typography.Title>;
}

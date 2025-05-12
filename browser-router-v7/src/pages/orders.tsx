import { Button, Typography } from "antd";
import { useSearchParams } from "react-router";

export default function Orders() {
  const [serachParams, setSearchParams] = useSearchParams();
  const sort = serachParams.get("sort") || "desc";
  return (
    <>
      <Typography.Title level={4}>Заказы с сортировкой {sort}</Typography.Title>
      <Button onClick={() => setSearchParams({ sort: "asc" })}>
        Сортировать по возрастанию
      </Button>
    </>
  );
}

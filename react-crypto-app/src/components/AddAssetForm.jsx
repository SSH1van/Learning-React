import {
  Select,
  Space,
  Flex,
  Divider,
  Typography,
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
} from "antd";
import { useState } from "react";
import { useCrypto } from "../context/crypto-context";

export default function AddAssetForm() {
  const [form] = Form.useForm();
  const [coin, setCoin] = useState(null);
  const { crypto } = useCrypto();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  function handleAmountChange(value) {
    form.setFieldsValue({
      total: (value * coin.price).toFixed(2) + "$",
    });
  }

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}!",
      min: "${label} cannot be less than 0!",
    },
  };

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
    <Form
      form={form}
      validateMessages={validateMessages}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 600 }}
      initialValues={{ price: +coin.price.toFixed(2) }}
      onFinish={onFinish}
    >
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

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber onChange={handleAmountChange} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Date & time" name="date">
        <DatePicker
          showTime
          onChange={(value, dateString) => {
            console.log("Selected Time: ", value);
            console.log("Formatted Selected Time: ", dateString);
          }}
          onOk={onOk}
        />
      </Form.Item>

      <Form.Item label="Total" name="total">
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
}

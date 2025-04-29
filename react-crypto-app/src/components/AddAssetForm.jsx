import { Divider, Button, Form, InputNumber, DatePicker, Result } from "antd";
import { useState, useEffect } from "react";
import { useCrypto } from "../context/crypto-context";
import CoinInfo from "./CoinInfo";
import CoinSelect from "./CoinSelect";

export default function AddAssetForm({ onClose }) {
  const [form] = Form.useForm();
  const [coin, setCoin] = useState(null);
  const { crypto } = useCrypto();
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    if (coin?.price) {
      form.setFieldsValue({ price: Number(coin.price.toFixed(2)) });
    }
  }, [coin?.price, form]);

  function onOk(values) {
    console.log("onOk:", values);
  }
  function onFinish() {
    setSubmitted(true);
  }
  function handleAmountChange(value) {
    const price = form.getFieldValue("price");
    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    });
  }

  function handlePriceChange(value) {
    const amount = form.getFieldValue("amount");
    form.setFieldsValue({
      total: +(value * amount).toFixed(2),
    });
  }
  function handleBuyAgain() {
    setCoin(null);
    setSubmitted(false);
    form.resetFields();
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
      <CoinSelect
        crypto={crypto}
        style={{ width: "100%" }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder="Select coin"
      />
    );
  }
  if (submitted) {
    return (
      <Result
        status="success"
        title="New Asset Successfully Added!"
        subTitle={`Added ${42} of ${coin.name} by price ${24}`}
        extra={[
          <Button type="primary" key="close" onClick={onClose}>
            Close
          </Button>,
          <Button key="buy" onClick={handleBuyAgain}>
            Buy Again
          </Button>,
        ]}
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
      onFinish={onFinish}
    >
      <CoinInfo coin={coin}></CoinInfo>
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
        <InputNumber onChange={handlePriceChange} style={{ width: "100%" }} />
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

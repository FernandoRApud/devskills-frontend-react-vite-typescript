import { Form, Input } from 'antd';

const InputComponent = ({
  label, name, rules
} : {
  label: string,
  name: string,
  rules?: object[]
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
    >
      <Input />
    </Form.Item>
  );
};

export default InputComponent;

import { useState } from 'react';
import { Form, message, Button } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import axios from '../../../config/configAxios';
import { DataType } from '../models';
import InputComponent from './InputComponent';
import { REGEX } from '../../../utilities';
import './index.css';

const AddMemberForm = ({
  label,
  updateMembers,
} : {
  label ?: string,
  updateMembers: (_members: DataType) => void
}) => {
  const [form] = Form.useForm();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const onFinish = async (values: DataType) => {
    try {
      setIsLoadingSubmit(true);
      await axios.post('/api/members', values).finally(() => {
        setIsLoadingSubmit(false);
      });
      message.success('La operación fue creada con exito');
      updateMembers(values);
    } catch (err) {
      message.error('There was an error creating the member, please try again');
      console.error(err);
    }
  };
  
  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    message.error('Hubo un error al procesar el formulario, por favor reintente');
    console.error(errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <h2>Add {label}</h2>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <InputComponent 
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'First name is required' }]}
        />
        <InputComponent 
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Last name is required' }]}
        />
        <InputComponent 
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Address is required' }]}
        />
        <InputComponent 
          label="SSN"
          name="ssn"
          rules={[{
            required: true, message: 'SSN is required'
          },{
            pattern: new RegExp(REGEX.SSN_PATTERN),
            message: 'Must be use the correct SSN pattern: ###-##-####'
          }]}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoadingSubmit}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset} className='ml-2'>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddMemberForm;

import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { DataType } from '../models';

const MembersTable = ({
  label,
  members,
} : {
  label?: string,
  members: DataType[],
}) => {
  const [dataSource, setDataSource] = useState<DataType[]>();

  useEffect(() => {
    setDataSource(members);
  }, [members]);

  
  const columns = [
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'SSN',
      dataIndex: 'ssn',
      key: 'ssn',
    },
  ];

  return (
    <>
      <h1>{label}</h1>
      <Table
        dataSource={dataSource}
        columns={columns} 
      />
    </>
  );
};

export default MembersTable;

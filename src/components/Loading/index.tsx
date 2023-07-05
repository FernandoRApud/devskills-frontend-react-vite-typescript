import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './index.css';

const Loading = () => {
  const antdIcon = <LoadingOutlined spin/>;
  return (
    <div className="minimalHeight center">
      <Spin indicator={antdIcon} tip='Loading...'/>  
    </div>
  );
}; 

export default Loading;

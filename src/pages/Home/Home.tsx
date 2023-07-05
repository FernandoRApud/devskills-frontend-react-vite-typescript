import { useEffect, useState } from 'react';
import AddMemberForm from './components/AddMemberForm';
import MembersTable from './components/MembersTable';
import { Col, Row, message } from 'antd';
import Loading from '../../components/Loading';
import axios from '../../config/configAxios';
import { setLocalStorage } from '../../hooks/localStorageHook';
import { DataType } from './models';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState<DataType[]>([]);
  let time: number;
  useEffect(() => {
    getInitialValues();
    inactivityTime();
  }, []);

  const getInitialValues = async() => {
    const { data: { token } } = await axios
      .post('/auth', {
        username: 'sarah',
        password: 'connor'
      });
    setLocalStorage('token', token);
    
    const { data } = await axios
      .get('http://localhost:8081/api/members')
      .finally(() => setIsLoading(false));
    setLocalStorage('members', data);
    setMembers(data);
  };

  const updateMembers = (member: DataType) => {
    const updatedMembers = [...members, member];
    setLocalStorage('members', updatedMembers);
    setMembers(updatedMembers);
  };

  const inactivityTime = () => {
    const refresh = () => {
      message.warning('2 minutes of inactivity, refreshing...');
      getInitialValues();
    };
  
    const resetTimer = () => {
      clearTimeout(time);
      time = setTimeout(refresh, 120000);
    };
    
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
    document.onload = resetTimer;
    document.onmousedown = resetTimer;
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;
    document.addEventListener('scroll', resetTimer, true);
  };

  if (isLoading) return <Loading />;
  return (
    <Row>
      <Col xs={11} lg={11}>
        <h1>Welcome to NewCombin</h1>
        <p>Please, add a member in the form, thank you!</p>
        <AddMemberForm label='member' updateMembers={updateMembers}/>
      </Col>
      <Col xs={2} lg={2}/>
      <Col xs={11} lg={11}>
        <MembersTable label='Members' members={members}/>
      </Col>
    </Row>
  );
};

export default Home;

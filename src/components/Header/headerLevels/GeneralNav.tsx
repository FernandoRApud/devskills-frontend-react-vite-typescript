import '../Header.css';
import { Button, Col, Dropdown, Layout, Menu, Row } from 'antd';
const { Header } = Layout;
import logo from '../../../assets/logo.png';
import { ROUTES } from '../../../utilities';
import { UserOutlined } from '@ant-design/icons';
import { LinkRouter } from '../../../styled-components/LinkRouter';

export default function GeneralNav() {
  const items = [
    { label: 'Home', key: '0', route: ROUTES.HOME },
    { label: 'About me', key: '1', route: ROUTES.ABOUTME },
  ];

  return(
    <Header className="header">
      <Row>
        <Col xs={6} lg={6}>
          <div className="imgLogoContainer">
            <LinkRouter to={'/'}>
              <img src={logo} className="imgLogo link"/>
            </LinkRouter>
          </div>
        </Col>
        <Col flex='auto'/>
        <Col xs={12} lg={12}>
          <Menu
            className="flex-end"
            theme="dark"
            mode="horizontal"
          >
            {
              items.reverse().map((item) => {
                return(       
                  <LinkRouter to={item.route} className='linksSpacing' key={item.route}>
                    {item.label}
                  </LinkRouter>                     
                );
              })
            }
          </Menu>
        </Col>
        <Col xs={1} lg={1} className="avatarCol">
          <Dropdown 
            overlay={(
              <Button>Welcome to NewCombin by Fernando R. Apud!</Button>
            )}
            placement="bottomRight"
            arrow
          >
            <UserOutlined className="flex-end avatar"/>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}

import './Footer.css';
import { Layout, Row } from 'antd';
const { Footer } = Layout;
import logo from '../../assets/logo.png';

export default function FooterGeneral() {
  return(
    <Footer>
      <Row justify="center">
        <img src={logo} className="imageSize"/>
        <p className="footerText">
          NewCombin - Copyright © - All rights reserved
        </p>
      </Row>
    </Footer>
  );
}

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <Row>
        <Col xs={18} lg={18}>
          <h2>About Me</h2>
          <p>Developer: Fernando R. Apud</p>
        </Col>
        <Col xs={6} lg={6}>
          <Link to={'https://github.com/FernandoRApud'} className='link'>Github</Link>
          <Link to={'https://www.linkedin.com/in/fernandorapud/'} className='link'>LinkedIn</Link>
        </Col>
      </Row>
    </>
  );
};

export default AboutMe;

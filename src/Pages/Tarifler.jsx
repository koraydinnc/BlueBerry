import './tarifler.css';
import Tarif1 from '../assets/Tarifler/tarif2.jpg';
import Tarif2 from '../assets/Tarifler/tarif1.jpg';
import Tarif3 from '../assets/Tarifler/tarif3.jpg';
import Tarif4 from '../assets/Tarifler/tarif5.jpg';
import Tarif5 from '../assets/Tarifler/tasrif4.jpg';

import { Col, Row, Image } from 'antd';

const Tarifler = () => {
  return (
    <Row className="tarifler-container" gutter={[16, 16]}>
      {/* Banner */}
      <Col xs={24} className="relative top-banner">
        <Image className="top-image object-cover" style={{ width: '100vw', height: '50vh' }} src={Tarif1} alt="Blueberry Tarifleri" preview={false} />
        <div className="banner-title">Blueberry Tarifleri</div>
      </Col>

      {/* Smoothie */}
      <Col xs={24} md={12}>
        <div className="tarif-card-left">
          <Image className="image-full" src={Tarif2} alt="Smoothie" preview={false} />
          <h2 className="tarif-title">Smoothie</h2>
        </div>
      </Col>

      {/* Muffin */}
      <Col xs={24} md={12}>
        <div className="tarif-card-right">
          <Image className="image-full" src={Tarif3} alt="Muffin" preview={false} />
          <h2 className="tarif-title">Muffin</h2>
        </div>
      </Col>

      {/* Cheesecake */}
      <Col xs={24} md={12}>
        <div className="tarif-card" style={{ backgroundImage: `url(${Tarif4})` }}>
          <h2 className="tarif-title">Cheesecake</h2>
        </div>
      </Col>

      {/* Panna Cotta */}
      <Col xs={24} md={12}>
        <div className="tarif-card" style={{ backgroundImage: `url(${Tarif5})` }}>
          <h2 className="tarif-title">Panna Cotta</h2>
        </div>
      </Col>
    </Row>
  );
};

export default Tarifler;

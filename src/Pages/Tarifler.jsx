import './tarifler.css';
import Tarif1 from '../assets/Tarifler/tarif2.jpg';
import Tarif2 from '../assets/Tarifler/tarif1.jpg';
import Tarif3 from '../assets/Tarifler/tarif3.jpg';
import Tarif4 from '../assets/Tarifler/tarif5.jpg';
import Tarif5 from '../assets/Tarifler/tasrif4.jpg';

import { Col, Row, Image } from 'antd';

const Tarifler = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <head>
        <title>Blueberry Tarifleri | Lezzetli ve Sağlıklı Tarifler</title>
        <meta
          name="description"
          content="Blueberry ile hazırlanan lezzetli ve sağlıklı tarifler: Smoothie, Muffin, Cheesecake ve Panna Cotta gibi tarifleri keşfedin."
        />
        <meta
          name="keywords"
          content="blueberry tarifleri, smoothie tarifleri, muffin tarifleri, cheesecake tarifleri, panna cotta tarifleri, sağlıklı tarifler"
        />
        <meta name="author" content="Blueberry Tarifi Ekibi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <Row className="tarifler-container" gutter={[16, 16]}>
        {/* Banner */}
        <Col xs={24} className="relative top-banner">
          <Image
            className="top-image object-cover"
            style={{ width: '100vw', height: '50vh' }}
            src={Tarif1}
            alt="Blueberry Tarifleri Banner"
            preview={false}
          />
          <h1 className="banner-title-left font-hussar">
            Blueberry Tarifleri
          </h1>
        </Col>

        {/* Tarif Kartları */}
        <Col xs={24} md={12}>
          <div className="tarif-card-container">
            <Image
              className="image-full rounded-lg"
              src={Tarif2}
              alt="Blueberry Smoothie Tarifi"
              preview={false}
              style={{ width: '100vw', height: '300px', objectFit: 'cover' }}
            />
            <div className="overlay">
              <h2 className="tarif-title">Smoothie</h2>
              <p className="tarif-info">Blueberry ile hazırlanan ferahlatıcı bir smoothie tarifi.</p>
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="tarif-card-container">
            <Image
              className="image-full rounded-lg"
              src={Tarif3}
              alt="Blueberry Muffin Tarifi"
              preview={false}
              style={{ width: '100vw', height: '300px', objectFit: 'cover' }}
            />
            <div className="overlay">
              <h2 className="tarif-title">Muffin</h2>
              <p className="tarif-info">Yumuşacık blueberry muffin tarifimizi keşfedin.</p>
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="tarif-card-container">
            <Image
              className="image-full rounded-lg"
              src={Tarif4}
              alt="Blueberry Cheesecake Tarifi"
              preview={false}
              style={{ width: '100vw', height: '300px', objectFit: 'cover' }}
            />
            <div className="overlay">
              <h2 className="tarif-title">Cheesecake</h2>
              <p className="tarif-info">Blueberry sosuyla enfes cheesecake tarifimizi deneyin.</p>
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="tarif-card-container">
            <Image
              className="image-full rounded-lg"
              src={Tarif5}
              alt="Blueberry Panna Cotta Tarifi"
              preview={false}
              style={{ width: '100vw', height: '300px', objectFit: 'cover' }}
            />
            <div className="overlay">
              <h2 className="tarif-title">Panna Cotta</h2>
              <p className="tarif-info">Blueberry ile hazırlanmış hafif bir tatlı: Panna Cotta.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tarifler;

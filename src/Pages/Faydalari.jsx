import { Col, Image, Row } from 'antd';
import BG from '../assets/faydalarson.png';
import Title from 'antd/es/typography/Title';
import Icon1 from '../assets/beyınsaglıgı.png';
import Icon2 from '../assets/kalpsaglıgı.png';
import Icon3 from '../assets/sındırımsıstemı.png';

const Faydalari = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Başlık Bölümü */}
      <Row className="min-h-screen" justify="center" align="middle">
        <Col xs={24} className="text-center mt-8">
          <Title
            className="font-extrabold font-hussar text-white text-shadow"
            level={1}
            style={{
              color: "white",
              wordWrap: "break-word",
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Blueberry Faydaları
          </Title>
        </Col>
      </Row>

      <Row justify="center" align="top" className="pb-24">
        <Col xs={8} sm={8} md={6} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Image
            src={Icon1}
            alt="Beyin Sağlığı"
            preview={false}
            style={{
              maxWidth: '80px',
              marginBottom: '15px',
              filter: 'none',
            }}
          />
          <Title level={4} className="font-hussar" style={{ color: "#fff" }}>
            Beyin Sağlığı
          </Title>
        </Col>

        <Col xs={8} sm={8} md={6} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Image
            src={Icon2}
            alt="Kalp Sağlığı"
            preview={false}
            style={{
              maxWidth: '80px',
              marginBottom: '15px',
              filter: 'none',
            }}
          />
          <Title level={4} className="font-hussar" style={{ color: "#fff" }}>
            Kalp Sağlığı
          </Title>
        </Col>

        <Col xs={8} sm={8} md={6} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Image
            src={Icon3}
            alt="Sindirim Sistemi"
            preview={false}
            style={{
              maxWidth: '80px',
              marginBottom: '15px',
              filter: 'none',
            }}
          />
          <Title level={4} className="font-hussar" style={{ color: "#fff" }}>
            Sindirim Sistemi
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default Faydalari;

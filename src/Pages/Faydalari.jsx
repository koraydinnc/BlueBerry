import { Col, Image, Row } from 'antd';
import ÜstFotograf from '../assets/faydalarson.png';
import Title from 'antd/es/typography/Title';
import Icon1 from '../assets/beyınsaglıgı.png';
import Icon2 from '../assets/kalpsaglıgı.png';
import Icon3 from '../assets/sındırımsıstemı.png';

const Faydalari = () => {
  return (
    <Row className="min-h-screen" justify="center" align="middle">
      <Col xs={24} md={24} className="relative h-screen">
        <Image
          className="w-screen"
          src={ÜstFotograf}
          style={{
            minWidth: '100vw',
            minHeight: '100vh',
          }}
          alt="Blueberry"
          preview={false}
        />
        
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Title
            className="font-extrabold  font-hussar text-white text-shadow"
            level={1}
            style={{
              color: "white",
              wordWrap: "break-word",
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Blueberry Faydaları
          </Title>
        </div>

        {/* Icons Section */}
        <div className="absolute left-1/2  transform -translate-x-1/2 flex justify-between w-4/5" style={{ top: '70%' }}>
          <Col xs={8} style={{ textAlign: 'center' }}>
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
            <Title level={4} className='font-hussar' style={{ color: "#fff" }}>Beyin Sağlığı</Title>
          </Col>
          <Col xs={8} style={{ textAlign: 'center', bottom:'100px' }}>
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
            <Title level={4} className='font-hussar' style={{ color: "#fff" }}>Kalp Sağlığı</Title>
          </Col>
          <Col xs={8} style={{ textAlign: 'center' }}>
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
            <Title level={4} className='font-hussar' style={{ color: "#fff" }}>Sindirim Sistemi</Title>
          </Col>
        </div>

      </Col>
    </Row>
  );
};

export default Faydalari;

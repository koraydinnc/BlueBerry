import { Col, Image, Row } from 'antd';
import UstFotograf from '../assets/Faydalari/faydalar1.png';
import AltFotograf from '../assets/Faydalari/faydalar2.png'; 
import Beyin from '../assets/Faydalari/'
import Title from 'antd/es/typography/Title';

const Faydalari = () => {
  return (
    <Row className="min-h-screen">
      <Col xs={24} md={24} className="relative">
        <Image
          className="w-screen h-[50vh] lg:h-[40vh] inline-block"
          src={UstFotograf}
          style={{
            minWidth: '100vw',
            maxHeight: '65vh',
          }}
          alt="Blueberry"
          preview={false} 
        />
        <div
          className="absolute top-20 left-60 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <Title
            className="font-extrabold font-hussar text-white text-shadow "
            level={2}
            style={{
              color: "white",
              wordWrap: "break-word",
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Blueberry 
            Faydaları
          </Title>
        </div>
      </Col>

      <Col xs={24} md={24} className="p-4">
        <Image
          className="w-full h-auto"
          src={AltFotograf}
          alt="Blueberry Alt Görsel"
          preview={false} 
        />
      </Col>
    </Row>
  );
};

export default Faydalari;

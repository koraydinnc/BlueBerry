import { Col, Image, Row } from 'antd';
import blueberry1 from '../assets/Blueberry/blueberry4.jpg';
import blueberry2 from '../assets/Blueberry/blueberry2.jpg';
import blueberry3 from '../assets/Blueberry/blueberry3.jpg';

const Blueberry = () => {
  return (
    <Row gutter={[16, 16]} style={{ margin: 0, padding: 0, height: '100vh' }}>
      {/* blueberry1 - Top Image */}
      <Col span={24} style={{ margin: 0, padding: 0 }}>
        <Image
          src={blueberry1}
          style={{
            width: '100vw',
            height: '30vh',
            objectFit: 'cover',
            filter: 'brightness(40%)',
          }}
                    alt="Blueberry"
        />
        <strong
          className="font-hussar font-extrabold absolute top-[90%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 text-white px-5 py-2 rounded-lg text-4xl text-center"
        >
          BLUEBERRY
        </strong>
      </Col>

      {/* blueberry2 and blueberry3 - Side by side */}
      <Col xs={24} md={12} style={{ margin: 0, padding: 0 }}>
        <Image
          src={blueberry2}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          alt="Blueberry"
        />
      </Col>
      <Col xs={24} md={12} style={{ margin: 0, padding: 0 }}>
        <Image
          src={blueberry3}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          alt="Blueberry"
        />
      </Col>

      {/* Footer Section - blueberry4 */}
      <Col span={24} style={{ position: 'relative', margin: 0, padding: 0 }}>
        <Image
          src={blueberry2}
          style={{
            width: '100vw',
            height: '30vh',
            objectFit: 'cover',
            filter: 'brightness(40%)',
          }}
          alt="Blueberry"
        />
        <div
          className="font-hussar"
          style={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
          }}
        >
          © 2024 <span className="text-blue-600 font-hussar">Patika Blueberry</span>
        </div>
      </Col>
    </Row>
  );
};

export default Blueberry;

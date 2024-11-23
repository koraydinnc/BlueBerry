import { Col, Image, Row } from 'antd';
import blueberry1 from '../assets/Blueberry/blueberry4.jpg';
import blueberry2 from '../assets/Blueberry/blueberry2.jpg';
import blueberry3 from '../assets/Blueberry/blueberry3.jpg';
import blueberry4 from '../assets/Blueberry/mavıalan.png'

const Blueberry = () => {
  return (
    <Row gutter={[24, 8]} style={{ margin: 0, padding: 0, height: '100vh' }}>
      <Col span={24} style={{ position: 'relative', margin: 0, padding: 0 }}>
        <Image
          src={blueberry1}
          style={{
            width: '100vw',
            height: '40vh',
            objectFit: 'cover',
          }}
          alt="Blueberry"
        />
        <div className='absolute top-40 font-hussarB font-bold line-clamp-6'>Doğanın sudnuğu en lezzetli ve sağlıklı meyvelerden biri olan *blueberry* (yaban mersini), yüksek antioksidan içeriği ve sağlığa faydaları ile dünya çapında popüler bir meyve. Biz de çiftliğimizde bu değerli meyvenin en taze ve doğal halini sizlere sunmaktan gurur duyuyoruz </div>

       <div
          style={{
            position: 'absolute',
            top: '80%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: 'clamp(3.5rem, 3.5vw, 3.5rem)', 
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
            textAlign: 'center',
            padding: '0 10px', 
          }}
        >
          BLUEBERRY
        </div>
      </Col>

      <Col xs={24} md={12} style={{ margin: 0, padding: 0 }}>
        <Image
          src={blueberry3}
          style={{
            width: '100%',
            height: '40vh',
            objectFit: 'cover',
          }}
          alt="Blueberry"
        />
      </Col>

      <Col xs={24} md={12} style={{ margin: 0, padding: 0, position: 'relative' }}>
        <Image
          src={blueberry4}
          style={{
            width: '100vw',
            height: '40vh',
            objectFit: 'cover',
          }}
          alt="Blueberry"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: 'clamp(0.5rem, 1.5vw, 1rem)', 
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
            textAlign: 'center',
            padding: '0 10px', 
          }}
        >
          Bir blueberry'nin en önemli özelliklerinden biri de, yıllık <strong className='text-green-400'>soğutma süreleri</strong> ile doğrudan ilişkili olan aromasının ve raf ömrünün kalitesidir. Çiftliğimizin bulunduğu bölge, yılda <strong className='text-green-400'>100 gün boyunca -4°C altında </strong>
          soğuyan iklim koşullarıyla, blueberrylerimizin kaliteli bir şekilde gelişmesine katkıda bulunur. Bu uzun soğutma süresi meyvelerimizin aromasını ve besin değerlerini maksimum seviyeye çıkarır.
        </div>
      </Col>

      <Col span={24} style={{ position: 'relative', margin: 0, padding: 0 }}>
        <Image
          src={blueberry2}
          style={{
            width: '100vw',
            height: '20vh',
            objectFit: 'cover',
            filter: 'brightness(40%)',
          }}
          alt="Blueberry"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            textAlign: 'center',
          }}
        >
          © 2024 <span style={{ color: '#1D5EA0' }}>Patika Blueberry</span>
        </div>
      </Col>
    </Row>
  );
};

export default Blueberry;

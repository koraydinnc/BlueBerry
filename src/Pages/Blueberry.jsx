import { Col, Image, Row } from 'antd';
import blueberry1 from '../assets/Blueberry/blueberry4.jpg';
import blueberry2 from '../assets/Blueberry/blueberry2.jpg';
import blueberry3 from '../assets/Blueberry/blueberry3.jpg';
import blueberry4 from '../assets/Blueberry/mavıalan.png';

const Blueberry = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <head>
        <title>Blueberry Hakkında | Sağlıklı ve Lezzetli Meyveler</title>
        <meta
          name="description"
          content="Doğal yöntemlerle yetiştirilen taze ve besleyici blueberry (yaban mersini) hakkında bilgi edinin. Antioksidan deposu, sağlıklı ve lezzetli meyvelerimizi keşfedin."
        />
        <meta
          name="keywords"
          content="blueberry, yaban mersini, sağlıklı meyve, antioksidan, doğal meyve, sağlıklı yaşam, blueberry faydaları"
        />
        <meta name="author" content="Patika Blueberry Ekibi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <Row gutter={[24, 8]} style={{ margin: 0, padding: 0, height: '100vh' }}>
        <Col span={24} style={{ position: 'relative', margin: 0, padding: 0 }}>
          <Image
            src={blueberry1}
            style={{
              width: '100vw',
              height: '40vh',
              objectFit: 'cover',
            }}
            alt="Blueberry Hakkında"
          />
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              color: 'white',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontWeight: '400',
              lineHeight: '1.8',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
            }}
            className="banner-description-left font-hussar"
          >
            Doğanın sunduğu en lezzetli ve sağlıklı meyvelerden biri olan{' '}
            <span style={{ color: '#E9FFFA', fontWeight: '900' }}>
              blueberry
            </span>{' '}
            (yaban mersini), yüksek antioksidan içeriği ve sağlığa faydaları ile
            dünya çapında popüler bir meyve. Biz de çiftliğimizde bu değerli
            meyvenin en taze ve doğal halini sizlere sunmaktan gurur
            duyuyoruz.
          </div>
          <h1
            style={{
              position: 'absolute',
              top: '5%',
              left: '5%',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
            }}
            className="banner-title-left font-hussar"
          >
            BLUEBERRY
          </h1>
        </Col>
        <Col xs={24} md={24}>
           <h1 className='font-hussar font-extrabold text-5xl m-4 justify-center flex' style={{color:'#7eb426'}}>Toprak ve İklim: Mükemmel Denge</h1>
           <span>Çiftliğimiz, <strong style={{color:'#7eb426'}}>1200 metre rakımda</strong> yer almakta olup, bu yükseklik bölgeye özgü ideal iklim koşullarının sağlanmasına yardımcı oluyor.
           Yüksek rakım, meyvelerimizin aromasını geliştirirken aynı zamanda daha sağlıklı ve uzun raf ömrüne sahip olmalarını sağlıyor. Bu özellik, özellikle blueberryler için oldukça önemlidir, çünkü meyvelerin kalitesi yüksek rakımda ve serin iklimde daha belirgin hale gelir.
                </span>
                <br />
                <span>Kurulum öncesi, toprak analizleri <strong style={{color:'#7eb426'}}>Prof.Dr.Aysan Şentürk ve ekibi</strong>tarafından titizlikle yapılmıştır. </span>
                <span>Toprağımızın organik seviyesi oldukça yüksek olup, pH seviyesi ortalama 4.5-5.2 civarındadır.Bu pH aralığı, blueberry için ideal bir ortam sağlar ve meyvelerimizin en iyi şekilde gelişmesine olanak tanır.</span>
        </Col>

        <Col xs={24} md={12} style={{ margin: 0, padding: 0 }}>
          <Image
            src={blueberry3}
            style={{
              width: '100%',
              height: '40vh',
              objectFit: 'cover',
            }}
            alt="Blueberry Üretimi"
          />
        </Col>

        <Col
          xs={24}
          md={12}
          style={{ margin: 0, padding: 0, position: 'relative' }}
        >
          <Image
            src={blueberry4}
            style={{
              width: '100vw',
              height: '40vh',
              objectFit: 'cover',
            }}
            alt="Blueberry Kalitesi"
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
              fontWeight: 'bold',
              lineHeight: '1.8',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
              textAlign: 'center',
              padding: '0 10px',
              background: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '8px',
            }}
          >
            Bir blueberry'nin en önemli özelliklerinden biri de, yıllık{' '}
            <strong style={{ color: '#66FFB2' }}>soğutma süreleri</strong> ile
            doğrudan ilişkili olan aromasının ve raf ömrünün kalitesidir.
            Çiftliğimizin bulunduğu bölge, yılda{' '}
            <strong style={{ color: '#66FFB2' }}>
              100 gün boyunca -4°C altında
            </strong>{' '}
            soğuyan iklim koşullarıyla, blueberrylerimizin kaliteli bir şekilde
            gelişmesine katkıda bulunur.
          </div>
        </Col>

        {/* Alt Görsel ve Yazı */}
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
    </div>
  );
};

export default Blueberry;

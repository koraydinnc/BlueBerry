import './tarifler.css';
import Tarif1 from '../assets/Tarifler/tarif2.jpg';
import Tarif2 from '../assets/Tarifler/tarif1.jpg';
import Tarif3 from '../assets/Tarifler/tarif3.jpg';
import Tarif4 from '../assets/Tarifler/tarif5.jpg';
import Tarif5 from '../assets/Tarifler/tasrif4.jpg';
import Muffin from '../assets/Muffin.png'
import Panna from '../assets/PannaCotta.png'
import Smoothie from '../assets/Smoothie.png'
import Chessecake from '../assets/Chessecake.png'

import { Col, Row, Image } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';

const Tarifler = () => {
  return (
    <div>
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
        <Col xs={24} className="relative top-banner">
          <Image
            className="top-image"
            style={{ width: '100vw', height: '50vh', objectFit: 'cover' }}
            src={Tarif1}
            alt="Blueberry Tarifleri Banner"
            preview={false}
          />
          <h1 className="banner-title-left font-hussar">Blueberry Tarifleri</h1>
        </Col>
        <Col xs={24}>
      <Title
        className="font-hussar"
        level={2}
        style={{
          color: '#1B5591',
          textAlign: 'center',
          fontSize: '32px', 
          fontWeight: 'bold',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)', 
          marginBottom: '5px', 
          padding: '10px', 
        }}
      >
        Blueberry Kullanarak Yapabileceğiniz Mükemmel Tarifler
      </Title>
    </Col>
        {[{
          src: Tarif2, title: Smoothie, info: "Blueberry ile hazırlanan ferahlatıcı bir smoothie tarifi."
        }, {
          src: Tarif3, title: Muffin, info: "Yumuşacık blueberry muffin tarifimizi keşfedin."
        }, {
          src: Tarif4, title: Chessecake, info: "Blueberry sosuyla enfes cheesecake tarifimizi deneyin."
        }, {
          src: Tarif5, title: Panna, info: "Blueberry ile hazırlanmış hafif bir tatlı: Panna Cotta."
        }].map((tarif, index) => (
          <Col xs={24} md={12} lg={12} key={index}>
            <div className="tarif-card-container">
              <Image
                className="image-full"
                src={tarif.src}
                alt={`${tarif.title} Tarifi`}
                preview={false}
                style={{ width: '100vw', height: '400px', objectFit: 'cover' }}
              />
             <div> <h2 className="tarif-title mt-12">
               <img className='max-w-40' src={tarif.title}></img>
              </h2></div>
              <div className="overlay">
                <p className="tarif-info">{tarif.info}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tarifler;

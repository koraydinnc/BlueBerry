import React from 'react';
import './tarifler.css';
import Tarif1 from '../assets/Tarifler/tarif2.jpg';
import Tarif2 from '../assets/Tarifler/tarif1.jpg';
import Tarif3 from '../assets/Tarifler/tarif3.jpg';
import Tarif4 from '../assets/Tarifler/tarif5.jpg';
import Tarif5 from '../assets/Tarifler/tasrif4.jpg';
import Muffin from '../assets/Muffin.png';
import Panna from '../assets/PannaCotta.png';
import Smoothie from '../assets/Smoothie.png';
import Cheesecake from '../assets/Chessecake.png';

import { Col, Row, Image } from 'antd';
import Title from 'antd/es/typography/Title';

const tarifData = [
  {
    src: Tarif5,
    titleImage: Smoothie,
    title: 'Smoothie',
    info: 'Yaban mersini, muz ve süzme yoğurtla hazırlanan ferahlatıcı bir smoothie tarifi.',
    recipe: `
    10-12 adet blueberry, yarım muz, 3 kaşık süzme yoğurt, 3 kaşık yulaf ezmesi, 
    1/2 çay bardağı süt ve 1 tatlı kaşığı bal ile hazırlayabilirsiniz. 
    Yaban mersini, muz ve yoğurdu blenderdan geçirip üzerine yulaf ezmesi, süt ve bal ekleyin.`,
  },
  {
    src: Tarif2,
    titleImage: Muffin,
    title: 'Muffin',
    info: 'Yumuşacık blueberry muffin tarifi, çayın yanında harika bir eşlikçi.',
    recipe: `
    1 bardak blueberry, 2 yumurta, 1 bardak süt, 1 bardak toz şeker, 1/2 bardak sıvı yağ, 
    2 bardak un, 1 paket vanilya, 1 paket kabartma tozu kullanarak hazırlayabilirsiniz. 
    200 derecede 30 dakika pişirin.`,
  },
  {
    src: Tarif3,
    titleImage: Cheesecake,
    title: 'Cheesecake',
    info: 'Blueberry sosuyla süslenmiş enfes cheesecake tarifi.',
    recipe: `
    Labne, süt kreması, nişasta ve vanilyayla hazırlanır. Üzerine blueberry sos eklenir. 
    Tabanı için bisküvi, tereyağı ve fındık kullanılır.`,
  },
  {
    src: Tarif4,
    titleImage: Panna,
    title: 'Panna Cotta',
    info: 'Blueberry ile hazırlanmış hafif bir tatlı: Panna Cotta.',
    recipe: `
    1 bardak süt, 1 bardak süt kreması, 1/2 çay bardağı toz şeker, 1 paket vanilya ve agar agar kullanılır. 
    Üzerine blueberry sos eklenir.`,
  },
];

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
            style={{ width: '100vw', height: '50vh', objectFit: 'cover' }}
            src={Tarif1}
            alt="Blueberry Tarifleri Banner"
            preview={false}
          />
        </Col>
        <Col xs={24}>
          <Title
            className="font-hussar"
            level={2}
            style={{
              color: '#1D6FB5',
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '5px',
              padding: '10px',
            }}
          >
            Blueberry Kullanarak Yapabileceğiniz Mükemmel Tarifler
          </Title>
        </Col >
        {tarifData.map((tarif, index) => (
  <Col xs={24} sm={24} md={12} lg={12} key={index}>
    <div className="tarif-card-container relative">
      <Image
        className="image-full"
        src={tarif.src}
        alt={`${tarif.title} Tarifi`}
        preview={false}
        style={{
          width: '100vw',
          height: '50vh',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <div className="text-center">
        <img
          className="title-image absolute"
          src={tarif.titleImage}
          alt={tarif.title}
          style={{
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%) translateY(50%)',
            width: '120px',
            height: 'auto',
            zIndex: 10,
          }}
        />
      </div>
      <div
        style={{
          zIndex: 11,
          padding: '20px',
          borderRadius: '8px',
        }}
        className="overlay"
      >
        <p
          className="tarif-info font-hussar"
          style={{
            marginTop:'54px',
            fontSize: '16px',
            color: '#FFF',
            textAlign: 'center',
          }}
        >
          {tarif.info}
        </p>
        <p
  className="tarif-recipe"
  style={{
    fontSize: '14px',
    color: '#FFF',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    lineHeight: '1.6',
  }}
>
  {tarif.recipe.replace(/,/g, ',\n')}
</p>

      </div>
    </div>
  </Col>
))}

      </Row>
    </div>
  );
};

export default Tarifler;

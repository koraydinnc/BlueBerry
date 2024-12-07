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
import { Helmet } from 'react-helmet';



const tarifData = [
  {
    src: Tarif5,
    titleImage: Smoothie,
    title: 'Smoothie',
    info: 'Yaban mersini, muz ve süzme yoğurtla hazırlanan ferahlatıcı bir smoothie tarifi',
    recipe: `
10-12 adet blueberry,
Yarım muz,
3 kaşık süzme yoğurt,
3 kaşık yulaf ezmesi,
1/2 çay bardağı süt,
1 tatlı kaşığı bal.

Hazırlık:
1. Yaban mersini, muz ve yoğurdu blenderdan geçirin.
2. Karışımı bir kaba alın, üzerine yulaf ezmesi, süt ve bal ekleyerek karıştırın.
Afiyet olsun!
    `,
  },
  {
    src: Tarif2,
    titleImage: Muffin,
    title: 'Muffin',
    info: 'Yumuşacık blueberry muffin tarifi, çayın yanında harika bir eşlikçi',
    recipe: `
1 bardak blueberry,
2 yumurta,
1 bardak süt,
1 bardak toz şeker,
1/2 bardak sıvı yağ,
2 bardak un,
1 paket vanilya,
1 paket kabartma tozu.

Hazırlık:
1. Yumurta ve toz şekeri çırpın.
2. Üzerine süt ve sıvı yağı ekleyin.
3. Un, vanilya ve kabartma tozunu karışıma ekleyin.
4. Blueberryleri unlayıp karışıma katın.
5. Muffin kalıplarına doldurun ve 200 derecede 30 dakika pişirin.
Afiyet olsun!
    `,
  },
  {
    src: Tarif3,
    titleImage: Cheesecake,
    title: 'Cheesecake',
    info: 'Blueberry sosuyla süslenmiş enfes cheesecake tarifi',
    recipe: `
1 bardak blueberry
600gr labne
3 yumurta
1 paket süt kreması
1 paket vanilya
2.5 kaşık nişasta
6 kaşık toz şeker
Taban için;
200 gr kakaolu bisküvi
80gr tereyağı
2 kaşık kırılmış fındık
Sosu için;
1 bardak blueberry
yarım limon suyu
1.5 çay bardağı su
2 tatlı kaşığı nişasta
6 yemek kaşığı toz şeker

Tabanı için bisküvileri robottan geçirip üzerine eritilmiş tereyağı ve fındığı ekleyip karıştıralım. 170 derece fansız fırında pişirelim. 
Bir kaseye labneyi ekleyelim. Üzerine toz şeker, süt kreması, nişasta ve vanilyayı ekleyip karıştıralım. Yumurtaları kırıp çırpalım. Son olarak leziz yaban mersinlerini ekleyip karıştıralım. 

Hazırlanan karışımı 170 derecede 30-35 dakika pişirelim. 1 gün buzdolabında dinlendirelim

Sosu için; 

Yaban mersinleri, toz şekerini, suyu, nişastayı, limon suyunu ekleyip kaynayana kadar pişirelim. hazırlanan sosu süzgeçten geçirdikten sonra buzdolabındaki hazır kalıbımıza dökelim, afiyet olsun.
    `,
  },
  {
    src: Tarif4,
    titleImage: Panna,
    title: 'Panna Cotta',
    info: 'Blueberry ile hazırlanmış hafif bir tatlı: Panna Cotta',
    recipe: `
Panna Cotta:
1 bardak süt,
1 bardak süt kreması,
1/2 çay bardağı toz şeker,
1 paket vanilya,
1 paket agar agar (2 gr).

Sos:
10-12 adet blueberry,
1/2 çay bardağı su,
3 yemek kaşığı toz şeker.

Hazırlık:
1. Süt, krema, agar agar ve şekeri kaynatın. Vanilyayı ekleyin ve ocaktan alın.
2. Karışımı kaplara dökün, 4 saat buzdolabında dinlendirin.
3. Sos için malzemeleri kaynatıp soğutun, panna cotta üzerine dökün.
Afiyet olsun!
    `,
  },
];


const Tarifler = () => {
  return (
    <div>
       <Helmet>
        <title>Blueberry Tarifleri | Patika Blueberry</title>
        <meta
          name="description"
          content="Patika Blueberry ile lezzetli ve sağlıklı tarifleri keşfedin. Blueberry reçelleri, smoothieler ve tatlılarla doğallığın tadını çıkarın."
        />
        <meta name="keywords" content="blueberry tarifleri, doğal meyve, sağlıklı tarifler, reçel, tatlı tarifleri" />
        <meta property="og:title" content="Blueberry Tarifleri: Sağlıklı ve Lezzetli Seçenekler" />
        <meta property="og:image" content="/assets/Tarifler/tarif1.jpg" />
      </Helmet>

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
    padding: '2px',
    borderRadius: '8px',
  }}
  className="overlay"
>
  <p
    className="tarif-info font-hussar"
    style={{
      fontSize: '16px',
      color: '#87C522',
      textAlign: 'center',
    }}
  >
    {tarif.info}
  </p>
  <p className="scrollable font-hussar text-white text-center whitespace-pre-line">
    {tarif.recipe.trim().replace(/,/g, ',\n')}
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


import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UstBG from '../assets/Faydalari/faydalarson.png';
import AltBG from '../assets/Faydalari/yazıfotograf.png';
import Icon1 from '../assets/Faydalari/kalpsaglıgı.png';
import Icon2 from '../assets/Faydalari/beyınsaglıgı.png';
import Icon3 from '../assets/Faydalari/sındırımsıstemı.png';
import { Col } from 'antd';

const Faydalari = () => {




  const iconData = [
    { photo: Icon1, description: 'Kalp Sağlığı' },
    { photo: Icon2, description: 'Beyin Sağlığı' },
    { photo: Icon3, description: 'Sindirim Sistemi Sağlığı' },
  ];

  const textData = [
    {
      title: 'Kan Basıncını Dengeler',
      description: 'Araştırmalar, düzenli tüketimin kan basıncını olumlu yönde etkilediğini göstermektedir',
    },
    {
      title: 'Antioksidan Bakımından Zengin',
      description: 'Oksidotif stresin etkilerini azaltmada antioksidanlar anahtar rol oynar. Blueberry bu konuda oldukça zengin bir kaynaktır.',
    },
    {
      title: 'Vitaminler ve Minerallerle Dolu',
      description: 'Vitamin C ve K içeriği ile günlük ihtiyacınızı karşılamaya yardımcı olur. Ayrıca mangan gibi mineraller açısından da zengindir',
    },
    {
      title: 'Kolesterol Dengesine Yardımcı Olur',
      description: 'Çözünür lif içeriği, kolesterol seviyelerinin düşmesine destek sağlar.',
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${UstBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',
        }}
      >
        <div
          className="absolute z-10 text-center w-full text-white top-10 "
        >
          <h1 className="font-hussar font-bold mt-24  text-4xl md:text-5xl lg:text-6xl">
            BLUEBERRY FAYDALARI
          </h1>
          <p className="text-lg mt-2 font-hussar  md:text-lg">
            Yaban Mersini'nin Sağlığa Olan Muhteşem Etkileriyle Tanışın
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full px-4 z-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-36 lg:ml-14">
            {iconData.map((icon, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.4,
                  ease: 'circOut',
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 1.2,
                  transition: { duration: 0.8 },
                }}
              >
              <img
                src={icon.photo}
                alt={icon.description}
                className="w-16 h-24 sm:w-20 sm:h-28 md:w-28 md:h-36 lg:w-32 lg:h-48 xl:w-40 xl:h-48"
              />
                <p className="font-hussar mt-2 text-white text-lg md:text-xl">
                  {icon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#8BC72A', width: '100vw', height: '24px' }}></div>

      <div
        style={{
          backgroundImage: `url(${AltBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 20px',
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'flex-start',
          position: 'relative',
        }}
      >
        <Col
          xs={24}
          sm={18}
          md={16}
          lg={14}
          xl={18}
          style={{
            padding: '20px',
            borderRadius: '8px',
            color: 'white',
            textAlign: 'left',
          }}
        >
          {textData.map((item, index) => (
            <motion.div
              key={index}
              style={{ marginBottom: '80px' }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.3,
                duration: 0.8,
                ease: 'backIn',
              }}
            >
              <h3
                className="font-hussar text-5xl"
                style={{
                  fontWeight: 'bold',
                  color: '#8BC72A',
                }}
              >
                <span>{item.title}</span>
              </h3>
              <h3
                className="font-hussar"
                style={{
                  fontSize: '2rem',
                  color: '#1D6FB5',
                  marginTop: '10px',
                }}
              >
                {item.description}
              </h3>
            </motion.div>
          ))}
        </Col>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            width: '100%',
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          <span style={{ color: 'black' }}>©{new Date().getFullYear()}</span>{' '}
          <span style={{ color: '#8BC72A' }}>Patika Blueberry</span>
        </div>
      </div>
    </div>
  );
};

export default Faydalari;

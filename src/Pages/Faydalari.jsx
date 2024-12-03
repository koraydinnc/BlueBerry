import { Card, Col, Image, Row } from 'antd';
import { motion } from 'framer-motion';
import BG from '../assets/faydalarson.png';
import Title from 'antd/es/typography/Title';
import Icon1 from '../assets/beyınsaglıgı.png';
import Icon2 from '../assets/kalpsaglıgı.png';
import Icon3 from '../assets/sındırımsıstemı.png';
import Paragraph from 'antd/es/typography/Paragraph';

const Faydalari = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <Row className="min-h-screen" justify="center" align="middle">
        <Col xs={24} className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Title
              className="font-hussar text-white"
              level={1}
              style={{
                wordWrap: 'break-word',
                textShadow: '4px 4px 12px rgba(0, 0, 0, 0.7)',
                fontSize: '3rem',
                color: '#1E90FF',
              }}
            >
              <span className="text-white">Blueberry Faydaları</span>
            </Title>
            <Paragraph
            className='font-hussar'
              style={{
                color: '#A9B3C1',
                fontSize: '1.2rem',
                marginTop: '10px',
              }}
            >
              Yaban mersininin sağlığa olan muhteşem etkileriyle tanışın!
            </Paragraph>
          </motion.div>
        </Col>
      </Row>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="pb-16"
      >
       <Row justify="center" gutter={[24, 24]} className="mt-8 px-4">
  {[
    { src: Icon1, title: 'Beyin Sağlığı', offset: '50px' }, 
    { src: Icon2, title: 'Kalp Sağlığı', offset: '0px' },   
    { src: Icon3, title: 'Sindirim Sistemi', offset: '50px' }, 
  ].map((icon, index) => (
    <Col xs={24} sm={12} md={8} key={index}>
      <motion.div variants={contentVariants}>
        <div
          className="m-4"
          style={{
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <Image
            src={icon.src}
            alt={icon.title}
            preview={false}
            style={{
              width: '90px', 
              marginBottom: '5px', 
              marginTop: icon.offset, 
            }}
          />
          <Title
            className="font-hussar mt-2"
            level={4}
            style={{
              color: '#fff',
              fontSize: '1.4rem',
              fontWeight: '600',
            }}
          >
            {icon.title}
          </Title>
        </div>
      </motion.div>
    </Col>
  ))}
</Row>
      </motion.div>

      <motion.div
        className="px-6 md:px-16 lg:px-24 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {[
          {
            title: 'Antioksidan Bakımından Zengin',
            text: 'Oksidatif stresin etkilerini azaltmada antioksidanlar anahtar rol oynar. Blueberry bu konuda oldukça zengin bir kaynaktır.',
          },
          {
            title: 'Vitaminler ve Minerallerle Dolu',
            text: 'Vitamin C ve K içeriği ile günlük ihtiyacınızı karşılamaya yardımcı olur. Ayrıca mangan gibi mineraller açısından da zengindir.',
          },
          {
            title: 'Kolesterol Dengesine Yardımcı Olur',
            text: 'Çözünür lif içeriği, kolesterol seviyelerinin düşmesine destek sağlar.',
          },
          {
            title: 'Kan Basıncını Dengeler',
            text: 'Araştırmalar, düzenli tüketimin kan basıncını olumlu yönde etkilediğini göstermektedir.',
          },
        ].map((section, index) => (
          <motion.div 
  key={index} 
  variants={contentVariants} 
  className="mb-10 p-6 bg-gradient-to-r rounded-lg shadow-lg"
>
  <div className="flex items-center gap-4 mb-4 justify-center">
 
    <Title
      level={3}
      className="font-hussar text-white"
      style={{
        fontSize: '1.7rem',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
      }}
    >
      <span className='text-blue-400'>{section.title}</span>
    </Title>
  </div>
  <Paragraph
    className="font-hussar justify-center items-center flex"
    style={{
      color: '#F5F7FA',
      fontSize: '1rem',
      lineHeight: '1.8',
      textAlign: 'justify',
    }}
  >
     <span >{section.text}</span>
  </Paragraph>
</motion.div>
        ))}
      </motion.div>
      <br /><br /><br /><br />
    </div>
  );
};

export default Faydalari;

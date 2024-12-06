import React from 'react';
import { Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { Helmet } from 'react-helmet';

const ProductsPage = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: 'rgba(17, 34, 64, 0.9)',
    color: '#FFF',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    color: '#1E90FF',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    fontSize: '1.5rem',
  };

  const paragraphStyle = {
    color: '#A9B3C1',
    fontSize: '1rem',
    lineHeight: '1.8',
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        background: 'linear-gradient(to bottom, #0a192f, #112240)',
        padding: '50px 20px',
      }}
    >
      <Helmet>
        <title>Ürünlerimiz - Blueberry</title>
        <meta name="description" content="Blueberry ürünlerimizi keşfedin: Doğadan gelen kalite ve lezzet!" />
        <meta name="keywords" content="blueberry, dondurulmuş ürünler, taze ürünler, organik, doğa dostu" />
      </Helmet>

      <Row justify="center" className="text-center mb-12">
        <Col xs={24}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Title
              className="font-hussar"
              level={1}
              style={{
                color: '#1E90FF',
                fontSize: '3rem',
                textShadow: '4px 4px 10px rgba(0, 0, 0, 0.4)',
              }}
            >
              Ürünlerimiz
            </Title>
            <Paragraph
              className="font-hussar"
              style={{
                fontSize: '1.2rem',
                color: '#A9B3C1',
              }}
            >
              Blueberry ürünlerimizi keşfedin: Doğadan gelen kalite ve lezzet!
            </Paragraph>
          </motion.div>
        </Col>
      </Row>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Row
          gutter={[32, 32]}
          justify="center"
          className="mb-8 px-4"
          style={{ display: 'flex', alignItems: 'stretch' }}
        >
          <Col xs={24} sm={12} md={10} style={{ display: 'flex' }}>
            <motion.div variants={contentVariants} style={{ width: '100%' }}>
              <Card hoverable style={cardStyle}>
                <Title className="font-hussar" level={3} style={titleStyle}>
                  Dondurulmuş Ürünler
                </Title>
                <Paragraph className="font-hussar" style={paragraphStyle}>
                  Bir blueberry'nin en önemli özelliklerinden biri, yıllık soğutma süreleri ile doğrudan ilişkili olan aromasının ve raf ömrünün kalitesidir. Çiftliğimizin bulunduğu bölge, yılda 100 gün boyunca -4°C altında soğuyan iklim koşullarıyla, blueberrylerimizin kaliteli bir şekilde gelişmesine katkıda bulunur. Bu uzun soğutma süresi, meyvelerimizin hem aromasını hem de besin değerlerini maksimum seviyeye çıkarır.
                </Paragraph>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} sm={12} md={10} style={{ display: 'flex' }}>
            <motion.div variants={contentVariants} style={{ width: '100%' }}>
              <Card hoverable style={cardStyle}>
                <Title className="font-hussar" level={3} style={titleStyle}>
                  Taze Ürünler
                </Title>
                <Paragraph className="font-hussar" style={paragraphStyle}>
                  Çiftliğimizde her şey doğaya ve çevreye saygı ile yapılmaktadır. Kimyasal gübreler veya zararlılarla mücadele için sentetik ilaçlar kullanmıyoruz. Tüm yetiştirme sürecimiz, doğa dostu ve organik yöntemlerle gerçekleştirilir. Amacımız, sizlere en taze, en sağlıklı ve en doğal blueberryyi sunmaktır.
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default ProductsPage;

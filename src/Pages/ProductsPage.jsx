import React from "react";
import { Row, Col, Card, Image } from "antd";
import { motion } from "framer-motion";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Helmet } from "react-helmet";
import product1 from "../assets/ürünlerimizFoto/1.jpg";
import product2 from "../assets/ürünlerimizFoto/2.jpg";
import product3 from "../assets/ürünlerimizFoto/3.jpg";
import product5 from "../assets/ürünlerimizFoto/5.jpg";
import LazyLoad from "react-lazyload";

const products = [
  {
    title: "Dondurulmuş Ürünler",
    description:
      "Bir blueberry'nin en önemli özelliklerinden biri, yıllık soğutma süreleri ile doğrudan ilişkili olan aromasının ve raf ömrünün kalitesidir. Bu uzun soğutma süresi, meyvelerimizin hem aromasını hem de besin değerlerini maksimum seviyeye çıkarır.",
    image: product1,
  },
  {
    title: "Taze Ürünler",
    description:
      "Çiftliğimizde her şey doğaya ve çevreye saygı ile yapılmaktadır. Kimyasal gübreler veya zararlılarla mücadele için sentetik ilaçlar kullanmıyoruz. Tüm yetiştirme sürecimiz, doğa dostu ve organik yöntemlerle gerçekleştirilir.",
    image: product2,
  },
  {
    title: "Organik Blueberry",
    description:
      "Organik sertifikalı blueberrylerimiz, hem sağlıklı hem de çevreye duyarlı bir üretim sürecinden geçmektedir. Tüm üretim aşamalarında kalite standartlarına uygun yöntemler uygulanmaktadır.",
    image: product3,
  },
  {
    title: "Doğadan Sofralarınıza",
    description:
      "Blueberrylerimiz doğrudan çiftlikten sofralarınıza ulaşır. Doğal tat ve yüksek besin değeri ile sağlıklı yaşamınıza katkı sağlar.",
    image: product5,
  },

];

const ProductsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.8 } },
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        background: "linear-gradient(to bottom, #0a192f, #112240)",
        padding: "50px 20px",
      }}
    >
      <Helmet>
        <title>Ürünlerimiz - Blueberry</title>
        <meta
          name="description"
          content="Blueberry ürünlerimizi keşfedin: Doğadan gelen kalite ve lezzet!"
        />
        <meta
          name="keywords"
          content="blueberry, dondurulmuş ürünler, taze ürünler, organik, doğa dostu"
        />
      </Helmet>

      <Row justify="center" className="text-center mb-12">
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Title
              className="font-hussar"
              level={1}
              style={{
                color: "#1E90FF",
                fontSize: "3rem",
                textShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)",
              }}
            >
              Ürünlerimiz
            </Title>
            <Paragraph
              className="font-hussar"
              style={{
                fontSize: "1.2rem",
                color: "#A9B3C1",
              }}
            >
              Blueberry ürünlerimizi keşfedin: Doğadan gelen kalite ve lezzet!
            </Paragraph>
          </motion.div>
        </Col>
      </Row>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row
          gutter={[32, 32]}
          justify="center"
          className="mb-8 px-4"
          style={{ display: "flex", alignItems: "stretch" }}
        >
          {products.map((product, index) => (
            <Col xs={24} sm={12} md={12} lg={12} key={index}>
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  y: [0, -20, 1],
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.8, 1],
                }}
                viewport={{ once: false }}
              >
                <Card
                  cover={
                    <LazyLoad height={500} once>
                      <Image
  src={product.image}
  alt={product.title}
  style={{
    width: '100vw',  
    height: '600px', 
    objectFit: 'cover',
  }}
  preview={false}
  loading="lazy"
/>

                    </LazyLoad>
                  }
                  style={{
                    width:'100%',
                    height:'100%'
,                    display: "flex",
                    flexDirection: "column",
                    textAlign:'initial',
                    justifyContent: "space-between",
                    backgroundColor: "rgba(17, 34, 64, 0.9)",
                    color: "black",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h1
                    className="font-hussar text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl"
                    style={{
                      color: "#1E90FF",
                    }}
                  >
                    {product.title}
                  </h1>
                  <h3
                    className="font-hussar mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl"
                    style={{
                      lineHeight: "3rem",
                      color: "#fff",
                    }}
                  >
                    {product.description}
                  </h3>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default ProductsPage;

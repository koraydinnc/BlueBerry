import { Col, Image, Row, Typography } from "antd";
import { Helmet } from "react-helmet";
import anasayfatarif from '../assets/HomePage/anasayfatarif.png'
import AltFotograf from "../assets/HomePage/anasayfa2.png";
import UstFotograf from "../assets/HomePage/anasayfa11.jpg";
import Organik from "../assets/HomePage/organıkıcon.png";
import Yerli from "../assets/HomePage/yerlıuretımıcon.png";
import Saglik from "../assets/HomePage/saglıklııcon.png";
import { motion } from 'framer-motion';
import Dogal from "../assets/HomePage/dogal.png";
import ButtonBG from "../assets/tarıfler.png";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const { Title, Text } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Helmet>
        <title>Organik Yaban Mersini Ürünleri ve Sağlıklı Tarifler</title>
        <meta
          name="description"
          content="Yaban mersini ile organik ve sağlıklı tarifler. 75 dekarlık tarlamızda doğal üretim yaban mersini ve birbirinden lezzetli tarifler sizi bekliyor."
        />
        <meta
          name="keywords"
          content="yaban mersini, organik, sağlıklı tarifler, doğal ürünler, blueberry tarifleri"
        />
        <meta name="author" content="Yaban Mersini Üreticisi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Organik Yaban Mersini Ürünleri ve Tarifler"
        />
        <meta
          property="og:description"
          content="Organik yaban mersini ile sağlıklı tariflere göz atın. Cheesecake, muffin ve smoothie gibi tariflerle doğal beslenmeyi keşfedin."
        />
        <meta property="og:image" content={UstFotograf} />
        <meta property="og:url" content="https://patikablueberrygarden.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Row>
        <Col span={24}>
          <Image
            preview={false}
            src={UstFotograf}
            className="w-full h-[50vh] lg:h-[55vh] object-cover"
            alt="Blueberry"
          />
        </Col>
      </Row>

      <Row justify="center" align="middle" className="text-center py-8 px-4">
  <Col span={24}>
  <motion.div
      whileInView={{
        opacity: [ 0, 1],
        y: [0, 100 , 0],
      }}
      transition={{
        duration: 3,
        times: [0, 0, 1],
      }}
      viewport={{ once: true }}
    >
      <span
        style={{ color: '#1D6DB4' }}
        className="font-extrabold font-hussar bg-white text-blue-600 text-xl md:text-2xl lg:text-4xl"
      >
        “Beslenmenizde tek bir değişiklik yapacaksanız, o da yaban mersini
        eklemek olmalı.”
      </span>
    </motion.div>
   
  </Col>
</Row>

<Row>
  <Col span={24} style={{ position: "relative" }}>
    <div className="flex justify-center mb-8">
      <motion.div
    whileInView={{
      opacity: [ 0, 1],
      y: [0, -20 , 0],
    }}
      transition={{
        duration: 3,
        times: [0, 0.5, 1],
      }}
      viewport={{ once: false }}>
      <Image
        src={Dogal}
        preview={false}
        className="max-w-48 lg:max-w-72"
        alt="Doğal"
      />
      </motion.div>
 
    </div>
    <Image
      preview={false}
      src={AltFotograf}
      style={{ minWidth: '100vw' }}
      className="min-h-56  lg:h-[50vh] object-cover brightness-50"
      alt="Blueberry"
    />

    <Row
      justify="space-around"
      align="middle"
      className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-10 text-white"
    >
      <Col span={24} className="text-center mt-4">
        <Text className="font-semibold font-hussar text-2xl lg:text-4xl px-8 text-white">
        </Text>
      </Col>
      {[{ img: Organik, label: "Organik" }, { img: Yerli, label: "Yerli Üretim" }, { img: Saglik, label: "Sağlıklı" }].map((feature, index) => (
        <Col
          xs={8}
          sm={8}
          md={8}
          key={index}
          className="text-center flex flex-col items-center"
        >
         <motion.div
  whileHover={{
    scale: 1.2,
  }}
  transition={{
    type: "tween", 
    stiffness: 300, 
  }}
>
  <Image
    preview={false}
    src={feature.img}
    className="max-w-[50px] md:max-w-[100px] lg:max-w-[200px]"
    alt={feature.label}
  />
</motion.div>
        
          <Text className="font-hussar md:text-3xl sm:text-2xl mt-4 lg:text-4xl text-white">
            {feature.label}
          </Text>
          <br /><br />
        </Col>
      ))}
    </Row>

    <Row
  justify="center"
  className="absolute bottom-12 w-full z-10 text-white"
  style={{ transform: 'translateY(10%)' }}
>
  <Col
    span={24}
    className="text-center px-8 md:px-8 mt-80 sm:mt-72 lg:mt-32"
  >
    <span
      className="font-semibold font-hussar text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
    >
      "75 dekarlık tarlamızda doğal üretim yaban mersini ve birbirinden lezzetli tarifler sizi bekliyor."
    </span>
  </Col>
</Row>


  </Col>
</Row>


      
<Row
  className=" cursor-pointer"
  justify="center"
  gutter={[16, 16]}
  style={{ marginTop: "20px", minWidth:'100vw' }}
>
  <Col className="relative" span={24}>
    <Image
      onClick={() => navigate('/tarifler')}
      src={anasayfatarif}
      style={{minWidth:'100vw'}}
      className="max-h-[300px] lg:max-h-[600px] object-cover "
    />
  </Col>
  <Col className="absolute cursor-pointer">
  <Image
  preview={false}
  onClick={() => navigate('/tarifler')}
  className="ButtonBG-image md:max-w-56 lg:max-w-96 mt-24 "
  src={ButtonBG}
/>
  </Col>
</Row>

    </div>
  );
};

export default HomePage;

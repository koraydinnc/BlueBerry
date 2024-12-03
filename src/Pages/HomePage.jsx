import { Col, Image, Row, Typography } from "antd";
import { Helmet } from "react-helmet";
import anasayfatarif from '../assets/HomePage/anasayfatarif.png'
import AltFotograf from "../assets/HomePage/anasayfa2.png";
import UstFotograf from "../assets/HomePage/anasayfa11.jpg";
import Organik from "../assets/HomePage/organıkıcon.png";
import Yerli from "../assets/HomePage/yerlıuretımıcon.png";
import Saglik from "../assets/HomePage/saglıklııcon.png";
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
    <Title
      style={{ color: '#1D6DB4' }}
      className="font-extrabold font-hussar bg-white text-blue-600 text-xl lg:text-2xl"
      level={1}
    >
      “Beslenmenizde tek bir değişiklik yapacaksanız, o da yaban mersini
      eklemek olmalı.”
    </Title>
  </Col>
</Row>

<Row>
  <Col span={24} style={{ position: "relative" }}>
    <div className="flex justify-center mb-8">
      <Image
        src={Dogal}
        preview={false}
        className="max-w-xs lg:max-w-md"
        alt="Doğal"
      />
    </div>
    <Image
      preview={false}
      src={AltFotograf}
      style={{ minWidth: '100vw' }}
      className="min-h-56 lg:h-[50vh] object-cover brightness-50"
      alt="Blueberry"
    />

    <Row
      justify="space-around"
      align="middle"
      className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-10 text-white"
    >
      <Col span={24} className="text-center m-4">
        <Text className="font-semibold font-hussar text-2xl lg:text-4xl px-8 text-white">
        </Text>
      </Col>
      {[{ img: Organik, label: "Organik" }, { img: Yerli, label: "Yerli Üretim" }, { img: Saglik, label: "Sağlıklı" }].map((feature, index) => (
        <Col
          xs={8}
          sm={6}
          md={4}
          key={index}
          className="text-center flex flex-col items-center"
        >
          <Image
            preview={false}
            src={feature.img}
            className="max-w-[30px] lg:max-w-[100px] h-auto"
            alt={feature.label}
          />
          <Text className="font-extrabold font-hussar mt-2 text-lg lg:text-xl text-white">
            {feature.label}
          </Text>
        </Col>
      ))}
    </Row>

    <Row justify="center" className="absolute bottom-20 w-full transform translate-y-10 z-10 text-white">
      <Col span={24} className="text-center">
        <Text className="font-semibold font-hussar text-xl lg:text-xl   text-white">
          "75 dekarlık tarlamızda doğal üretim yaban mersini ve birbirinden lezzetli tarifler sizi bekliyor."
        </Text>
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
  className="ButtonBG-image  lg:max-w-96 mt-24 "
  src={ButtonBG}
/>
  </Col>
</Row>

    </div>
  );
};

export default HomePage;

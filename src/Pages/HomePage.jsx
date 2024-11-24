import { Col, Image, Row, Typography } from "antd";
import { Helmet } from "react-helmet";
import Tarif1 from "../assets/HomePage/anasayfa1.jpg";
import Tarif2 from "../assets/HomePage/anasayfa3.jpg";
import Tarif3 from "../assets/HomePage/anasayfa4.jpg";
import AltFotograf from "../assets/HomePage/foto2.png";
import UstFotograf from "../assets/HomePage/anasffoto1.png";
import Organik from "../assets/HomePage/organıkıcon.png";
import Yerli from "../assets/HomePage/yerlıuretımıcon.png";
import Saglik from "../assets/HomePage/saglıklııcon.png";
import Dogal from "../assets/HomePage/dogal.png";
import "./HomePage.css";
import ButtonBG from "../assets/HomePage/ButtonBG.png";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
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

      <div>
      <Row>
  <Col span={24}>
    <Image
      preview={false}
      src={UstFotograf}
      style={{
        minWidth:'100vw'
        ,
        maxHeight:'35vh'
      }}
      className="w-screen h-[50vh] lg:h-[40vh] "
      alt="Blueberry"
    />
  </Col>
</Row>




        <Row
  justify="center"
  align="middle"
  style={{
    textAlign: "center",
    margin: "20px 0",
    padding: "0 15px", 
  }}
>
  <Col span={24}>
    <Title
      className="font-extrabold font-hussar"
      level={2}
      style={{
        color: "#004aad",
        wordWrap: "break-word", 
      }}
    >
      “Beslenmenizde tek bir değişiklik yapacaksanız, o da yaban mersini eklemek
      olmalı.”
    </Title>
  </Col>
</Row>


        <Row>
          <Col span={24} style={{ position: "relative" }}>
             <Col span={24} className="flex justify-center ">
             <Image
              src={Dogal}
              className="justify-center items-center"
              style={{
                 maxWidth:'320px',
              }}
              alt="Doğal"
            />
             </Col>

            <Image
               preview={false}
               className="w-screen  h-[50vh] lg:h-[40vh]"
               src={AltFotograf}
               style={{
                minWidth:'100vw'
                ,
                maxHeight:'35vh'
              }}
              alt="Blueberry"
            />

      

            <Row
              justify="space-around"
              align="middle"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <Col span={24} className="top-14">
    <Text
      
      style={{
        color: "white",
        textAlign: "center", 
        margin: "0 auto", 
        display: "block", 
      }}
      className="font-extrabold font-hussar text-3xl p-12"
    >
      “75 dekar tarlalarımızda blueberry'lerimizi sizler için üretiyoruz.”
    </Text>
  </Col>

              <Col className="top-12" xs={6} sm={4} md={3} style={{ textAlign: "center" }}>
                <Image
                  src={Organik}
                  preview={false}
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                    height: "16vh",
                  }}
                  alt="Organik"
                />
                <Text
                  className="flex  justify-center font-extrabold font-hussar text-nowrap"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(1.2rem, 1vw, 1.2rem)",
                  }}
                >
                  Organik
                </Text>
              </Col>

              <Col className="top-12" xs={6} sm={4} md={3} style={{ textAlign: "center" }}>
                <Image
                                  preview={false}
                  src={Yerli}
                  style={{
                    width: "100%",
                    maxWidth: "160px",
                    height: "17vh",
                  }}
                  alt="Yerli Üretim"
                />
                <Text
                  className="flex mb-6  justify-center font-extrabold font-hussar text-nowrap"
                  style={{
                    color: "white",
                    fontSize: "clamp(1.2rem, 1vw, 1rem)",
                  }}
                >
                  Yerli Üretim
                </Text>
              </Col>

              <Col className="top-12" xs={6} sm={4} md={3} style={{ textAlign: "center" }}>
                <Image
                                  preview={false}
                  src={Saglik}
                  style={{
                    width: "100%",
                    maxWidth: "140px",
                    height: "15vh",

                  }}
                  alt="Sağlıklı"
                />
                <Text
                  className="flex  justify-center font-extrabold font-hussar text-nowrap"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(1.2rem, 1vw, 1.2rem)",
                  }}
                >
                  Sağlıklı
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          className="relative"
          justify="center"
          gutter={[16, 16]}
          style={{ marginTop: "20px" }}
        >
          {[
            { img: Tarif1, text: "Muffin Tarifine Git" },
            { img: Tarif2, text: "Smoothie Tarifine Git" },
            { img: Tarif3, text: "Cheesecake Tarifine Git" },
          ].map((tarif, index) => (
            <Col xs={24} md={8} key={index} className="">
              <div
                className="tarif-container"
                onClick={() => navigate("/tarifler")}
              >
                <Image
                  src={tarif.img}
                  alt={tarif.text}
                  preview={false}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="hover-text font-hussarB font-bold">
                  {tarif.text}
                </div>
              </div>
            </Col>
          ))}

          <button
            onClick={() => navigate("/tarifler")}
            type="button"
            className="top-40 my-auto mx-auto bg-cover absolute bg-center bg-no-repeat text-white font-hussar font-bold px-4 py-2 rounded-lg hover:brightness-90 sm:px-6 sm:py-3"
            style={{ backgroundImage: `url(${ButtonBG})` }}
          >
            <p>Tarifler</p>
          </button>
        </Row>
      </div>
    </>
  );
};

export default HomePage;

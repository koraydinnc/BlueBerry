import { Col, Image, Row, Typography } from "antd";
import { Helmet } from "react-helmet"; // SEO için Helmet'i ekliyoruz
import Tarif1 from "../assets/HomePage/anasayfa1.jpg";
import Tarif2 from "../assets/HomePage/anasayfa3.jpg";
import Tarif3 from "../assets/HomePage/anasayfa4.jpg";
import AltFotograf from "../assets/HomePage/foto2.png";
import UstFotograf from "../assets/HomePage/anasffoto1.png";
import Organik from "../assets/HomePage/organıkıcon.png";
import Yerli from "../assets/HomePage/yerlıuretımıcon.png";
import Saglik from "../assets/HomePage/saglıklııcon.png";
import "./HomePage.css";
import ButtonBG from "../assets/HomePage/ButtonBG.png";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO Metadata */}
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
        <meta property="og:title" content="Organik Yaban Mersini Ürünleri ve Tarifler" />
        <meta
          property="og:description"
          content="Organik yaban mersini ile sağlıklı tariflere göz atın. Cheesecake, muffin ve smoothie gibi tariflerle doğal beslenmeyi keşfedin."
        />
        <meta property="og:image" content={UstFotograf} />
        <meta property="og:url" content="https://patikablueberrygarden.com"/>
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
        <Row>
          <Col span={24}>
            <Image
              src={UstFotograf}
              style={{
                minWidth: "100vw",
                height: "50vh",
                objectFit: "inherit",
              }}
              alt="Blueberry"
            />
          </Col>
        </Row>

        <Row
          justify="center"
          align="middle"
          style={{ textAlign: "center", margin: "20px 0" }}
        >
          <Col span={24}>
            <Title level={4} style={{ color: "#004aad" }}>
              “Beslenmenizde tek bir değişiklik yapacaksanız, o da yaban mersini
              eklemek olmalı.”
            </Title>
          </Col>
          <Col span={24}>
            <Text style={{ fontSize: "16px" }}>
              “75 dekar tarlalarımızda blueberry'lerimizi sizler için
              üretiyoruz.”
            </Text>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ position: "relative" }}>
            <Image
              src={AltFotograf}
              style={{
                width: "100vw",
                height: "40vh",
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
              }}
            >
              <Col xs={6} sm={4} md={3} style={{ textAlign: "center" }}>
                <Image
                  src={Organik}
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  alt="Organik"
                />
                <Text
                  className="flex  justify-center"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
                  }}
                >
                  Organik
                </Text>
              </Col>

              <Col xs={6} sm={4} md={3} style={{ textAlign: "center" }}>
                <Image
                  src={Yerli}
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  alt="Yerli Üretim"
                />
                <Text
                  className="flex  justify-center"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
                  }}
                >
                  Yerli Üretim
                </Text>
              </Col>

              <Col xs={6} sm={4} md={3} style={{ textAlign: "center" }}>
                <Image
                  src={Saglik}
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  alt="Sağlıklı"
                />
                <Text
                  className="flex  justify-center"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
                  }}
                >
                  Sağlıklı
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Tarifler */}
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
            <Col xs={24} md={8} key={index}>
              <div
                className="tarif-container"
                onClick={() => navigate("/tarifler")}
              >
                <img
                  src={tarif.img}
                  alt={tarif.text}
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

          {/* Tarifler Butonu */}
          <button
            onClick={() => navigate("/tarifler")}
            type="button"
            className="translate-x-2 top-60 bg-cover absolute bg-center bg-no-repeat text-white font-hussar font-bold px-4 py-2 rounded-lg hover:brightness-90 sm:px-6 sm:py-3"
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

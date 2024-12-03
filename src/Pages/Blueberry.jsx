import { Row, Col, Typography, Card } from "antd";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import blueberry1 from "../assets/Blueberry/blueberry4.jpg";
import blueberry2 from "../assets/Blueberry/blueberry2.jpg";
import blueberry3 from "../assets/Blueberry/blueberry3.jpg";
import blueberry4 from "../assets/Blueberry/mavıalan.jpg";

const { Title, Paragraph } = Typography;

const Blueberry = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "Arial, sans-serif" }} className="font-hussar">
      <Helmet>
        <title>Doğanın En Özel Lezzeti: Blueberry | Patika Blueberry</title>
        <meta
          name="description"
          content="Organik tarımla üretilmiş doğal blueberry'lerimizle sağlığınızı destekleyin. Taze ve lezzet dolu meyvelerimizle doğayı keşfedin."
        />
        <meta name="keywords" content="blueberry, doğal meyve, organik tarım, sağlıklı beslenme" />
        <meta property="og:title" content="Doğanın En Özel Lezzeti: Blueberry" />
        <meta
          property="og:description"
          content="Sağlığınızı destekleyen doğal blueberry'lerimizi keşfedin. Doğadan gelen taze lezzetler için doğru adres."
        />
        <meta property="og:image" content={blueberry1} />
        <meta property="og:url" content="https://www.patikablueberry.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={blueberry1}
          alt="Blueberry"
          style={{
            maxHeight:'50vh',
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            color: "#fff",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
            padding: "1rem",
          }}
        >
          <Title
            level={1}
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#fff",
            }}
            className="font-hussar"
          >
            Doğanın En Özel Lezzeti: <strong style={{ color: "#1D6FB5" }}>Blueberry</strong>
          </Title>
        </div>
      </section>

      <section style={{ padding: "3rem 1rem" }}>
        <Row gutter={[32, 32]} justify="center">
          {[
            {
              title: "Toprak ve İklim",
              image: blueberry3,
              description: (
                <>
                  <span style={{ color: "#1D6FB5", fontWeight: "bold" }}>Soğutma Süreleri:</span> Yıllık soğutma süreleri blueberrynin aromasını ve raf ömrünü etkiler. Çiftliğimiz 100 gün boyunca -4°C altında iklim koşullarına sahiptir.
                  <br />
                  <span style={{ color: "#1D6FB5", fontWeight: "bold" }}>Organik Tarım:</span> Kimyasal gübre veya sentetik ilaçlar kullanılmaz.
                </>
              ),
            },
            {
              title: "Çeşitler ve Hasat",
              image: blueberry4,
              description: (
                <>
                  <span style={{ color: "#1D6FB5", fontWeight: "bold" }}>Türler:</span> Düke, Chandler, Bluegold gibi çeşitler yetiştiriyoruz.
                  <br />
                  <span style={{ color: "#1D6FB5", fontWeight: "bold" }}>Hasat Dönemi:</span> Haziran'dan Eylül'e kadar uzanır.
                </>
              ),
            },
            {
              title: "Besin Değeri ve Sağlık",
              image: blueberry2,
              description: (
                <>
                  <span style={{ color: "#1D6FB5", fontWeight: "bold" }}>Besin Değerleri:</span> 1 bardak blueberry, günlük C vitamini ihtiyacının %16'sını karşılar.
                  <br />
                  <span style={{ color: "#1D6FB5", fontWeight: "bold" }}>Kalori:</span> 84 kalori içerir.
                </>
              ),
            },
          ].map(({ title, image, description }, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card
                  hoverable
                  style={{
                    height:'500px',
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  cover={<img src={image} alt={title} style={{ height: "200px", objectFit: "cover" }} />}
                >
                  <Title level={3} className="font-hussar" style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#1D6FB5" }}>
                    {title}
                  </Title>
                  <Paragraph className="font-hussar" style={{ fontSize: "1rem", lineHeight: "1.6" }}>{description}</Paragraph>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      <footer
        style={{
          padding: "2rem 0",
          backgroundColor: "#1D6FB5",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Paragraph className="font-hussar text-white" style={{ fontSize: "1rem" }}>© 2024 Patika Blueberry</Paragraph>
      </footer>
    </div>
  );
};

export default Blueberry;

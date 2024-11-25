import { Row, Col, Typography, Card, Image } from "antd";
import { Helmet } from "react-helmet";
import blueberry1 from "../assets/Blueberry/blueberry4.jpg";
import blueberry2 from "../assets/Blueberry/blueberry2.jpg";
import blueberry3 from "../assets/Blueberry/blueberry3.jpg";
import blueberry4 from "../assets/Blueberry/mavıalan.png";

const { Title, Paragraph } = Typography;

const Blueberry = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "Arial, sans-serif" }}>
      {/* SEO */}
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
  <Image
    src={blueberry1}
    loading="lazy"
    alt="Blueberry"
    preview={false}
    className="brightness-50"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    
    }}
  />
  <div
    style={{
      zIndex: 1, 
      color: "#fff",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
      padding: "1rem",
      position:'absolute'
    }}
  >
    <Title
      level={1}
      className="font-hussar font-extrabold-"
      style={{
        fontSize: "clamp(1.5rem, 5vw, 3rem)", 
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#fff",
      }}
    >
      Doğanın En Özel Lezzeti: <strong className="text-blue-600">Blueberry</strong>
    </Title>
    <Paragraph
      className="font-hussar"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        lineHeight: "1.8",
        fontSize: "clamp(1rem, 3vw, 1.25rem)", 
        color: "#fff",
      }}
    >
      Sağlığınızı destekleyen, doğanın eşsiz hediyesi blueberry'lerimizi tanıyın.
    </Paragraph>
  </div>
</section>


      <section style={{ padding: "3rem 1rem" }}>
        <Row gutter={[32, 32]} justify="center">
          {[
            {
              title: "Toprak ve İklim",
              image: blueberry3,
              description: `Çiftliğimiz 1200 metre rakımda yer almakta olup, eşsiz iklim koşullarına sahiptir. 
                İdeal pH seviyesiyle toprak, blueberrylerimizin aroma ve besin değerlerini maksimum seviyeye çıkarır.`,
              extra: `Blueberrylerimiz doğal yöntemlerle üretilmektedir.`,
            },
            {
              title: "İklim Avantajları",
              image: blueberry4,
              description: `100 gün boyunca -4°C altında geçen soğuk havalar, blueberrylerimizin lezzetini artırır.`,
              extra: `Sulama sırasında kullanılan asidik su, bitkilerin doğal büyümesine destek sağlar.`,
            },
            {
              title: "Çeşitlilik ve Hasat",
              image: blueberry2,
              description: `Düke, Bluecroup ve Chandler türleriyle farklı tat ve olgunlaşma dönemlerinde hasat yapıyoruz.`,
              extra: `Hasadımız Haziran'dan Eylül'e kadar uzanır.`,
            },
          ].map(({ title, image, description, extra }, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                cover={
                  <Image
                    loading="lazy"
                    src={image}
                    alt={title}
                    preview={false}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <Title level={3} className="font-hussar text-blue-600" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                  {title}
                </Title>
                <Paragraph className="font-hussar" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  {description}
                </Paragraph>
                <Paragraph className="font-hussar" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  {extra}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <footer
        style={{
          padding: "2rem 0",
          backgroundColor: "#001529",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Paragraph className="font-hussar font-bold text-white" style={{ fontSize: "1rem" }}>
          © 2024 Patika Blueberry | Tüm Hakları Saklıdır.
        </Paragraph>
      </footer>
    </div>
  );
};

export default Blueberry;

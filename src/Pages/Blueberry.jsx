import { Col, Row, Typography, Card, Image, Space } from "antd";
import blueberry1 from "../assets/Blueberry/blueberry4.jpg";
import blueberry2 from "../assets/Blueberry/blueberry2.jpg";
import blueberry3 from "../assets/Blueberry/blueberry3.jpg";
import blueberry4 from "../assets/Blueberry/mavıalan.png";

const { Title, Paragraph } = Typography;

const Blueberry = () => {
  return (
    <div style={{ backgroundColor: "#f0f2f5" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", height: "50vh", textAlign: "center" }}>
        <Image
          src={blueberry1}
          alt="Blueberry Hakkında"
          preview={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)", // Kontrastı artırdık
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Yazı gölgesi
          }}
        >
          <Title level={1} style={{ color: "#fff", fontSize: "3.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            Blueberry: Doğanın Hediyesi
          </Title>
          <Paragraph style={{ fontSize: "1.5rem", maxWidth: 600, margin: "0 auto", fontWeight: "500" }}>
            Yüksek antioksidan içeriğiyle sağlıklı ve lezzetli bir meyve olan blueberry,
            çiftliğimizde doğal yöntemlerle yetiştirilmiştir.
          </Paragraph>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: "3rem 1rem" }}>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2} style={{ color: "#3f6600", fontWeight: "bold" }}>
              Toprak ve İklim: Mükemmel Denge
            </Title>
            <Paragraph style={{ lineHeight: "1.8", fontSize: "1.125rem", fontWeight: "400" }}>
              Çiftliğimiz, <strong style={{ color: "#3f6600" }}>1200 metre rakımda</strong> yer
              almakta olup, ideal iklim koşullarının sağlanmasına yardımcı oluyor. Yüksek rakım,
              meyvelerimizin aromasını geliştirirken uzun raf ömrüne sahip olmasını sağlar.
            </Paragraph>
            <Paragraph style={{ lineHeight: "1.8", fontSize: "1.125rem", fontWeight: "400" }}>
              <strong>Prof. Dr. Aysan Şentürk</strong> ve ekibi tarafından yapılan toprak
              analizleri, organik seviyeyi optimize etti. Blueberrylerimizin en iyi şekilde
              gelişmesine olanak tanıyan bir pH seviyesi (4.5-5.2) elde ettik.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Image
              src={blueberry3}
              alt="Blueberry Toprağı"
              preview={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Col>
        </Row>
      </section>

      {/* Climate Advantage Section */}
      <section style={{ padding: "3rem 1rem", backgroundColor: "#e6f7ff" }}>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <Image
              src={blueberry4}
              alt="Blueberry Kalitesi"
              preview={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "1.5rem",
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0", // Kartın etrafında ince bir sınır ekledik
              }}
            >
              <Title level={2} style={{ color: "#0050b3", fontWeight: "bold" }}>
                İklimin Sağladığı Avantajlar
              </Title>
              <Paragraph style={{ lineHeight: "1.8", fontSize: "1.125rem" }}>
                Blueberry kalitesini belirleyen en önemli faktörlerden biri{" "}
                <strong style={{ color: "#0050b3", fontWeight: "500" }}>soğutma süresi</strong>. Yılda
                <strong style={{ color: "#0050b3", fontWeight: "500" }}> 100 gün boyunca -4°C altında</strong>{" "}
                soğuyan iklimimiz, blueberrylerimizin aromasını ve raf ömrünü maksimum seviyeye
                çıkarır.
              </Paragraph>
              <Title level={4} style={{ fontSize: "1.2rem", color: "#000", fontWeight: "500" }}>
                HER ADIMDA DOĞANIN İYİLİĞİNİ GÖZETEREK ÜRETTİĞİMİZ BLUEBERRYLERİMİZ LEZZETLERİYLE FARK YARATIYOR.
              </Title>
              <Paragraph style={{ fontSize: "1.125rem", fontWeight: "400" }}>
                 Bölgemizdeki sulama suyunun asidik yapısı da toprağımıza zarar vermemekte ve bu sayede sulama sürecindeki denge korunmaktadır. Blueberry bitkisi, asidik toprak yapısında en iyi şekilde büyür ve tatlı lezzetli meyveler verir.
              </Paragraph>
              <Paragraph style={{ fontSize: "1.125rem", fontWeight: "400" }}>
                Çiftliğimizde, farklı olgunlaşma dönemlerine sahip üç farklı türde <strong>Kuzeyci Blueberry</strong> yetiştirmekteyiz: erkenci, orta geçici ve geçici türler. Bu sayede uzun bir hasat dönemi boyunca lezzetli blueberryleri topluyoruz.
              </Paragraph>
              <Title level={4} style={{ fontSize: "1.125rem", fontWeight: "500" }}>İşte çiftliğimizde yetişen türler ve hasat dönemleri:</Title>
               <Paragraph>- Haziran-Temmuz: Düke, Bluecroup</Paragraph>
               <Paragraph>- Temmuz-Ağustos: Chandler, Brigitta, Bluegold</Paragraph>
               <Paragraph>- Ağustos-Eylül: Chandler, Elliot</Paragraph>
               <Paragraph style={{ fontSize: "1.125rem", fontWeight: "400" }}>Bu çeşitler, hem tatlarıyla hem de besin değerleriyle blueberry tutkunlarını tatmin ediyor. Farklı türlerin olgunlaşma zamanları, meyvelerin taze ve sağlıklı bir şekilde hasat edilmesini sağlıyor.</Paragraph>
               <Paragraph style={{ fontSize: "1.125rem", fontWeight: "400" }}>Çiftliğimizde her şey doğaya ve çevreye saygı ile yapılmaktadır. Kimyasal gübreler veya zararlılarla mücadele için sentetik ilaçlar kullanmıyoruz. Tüm yetiştirme sürecimiz, doğa dostu ve organik yöntemlerle gerçekleştirilir. Amacımız, sizlere en taze, en sağlıklı ve en doğal blueberry'i sunmaktır.</Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Footer Section */}
      <footer style={{ position: "relative", height: "30vh", textAlign: "center", color: "#fff" }}>
        <Image
          src={blueberry2}
          alt="Blueberry"
          preview={false}
          style={{
            width: "100vw",
            height: "30vh",
            objectFit: "cover",
            filter: "brightness(0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Footer yazısına gölge ekledik
          }}
        >
          <Title level={3} style={{ color: "#fff", fontSize: "2rem" }}>
          © 2024 Patika Blueberry
          </Title>
        </div>
      </footer>
    </div>
  );
};

export default Blueberry;

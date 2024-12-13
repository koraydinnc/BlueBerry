import { Card, Image } from "antd";
import { motion } from "framer-motion";
import Fotograf from "../assets/tımelınehıkayearasıfoto.jpg";
import HikayeBaslik from "../assets/baslık.png";
import TimelineImage from "../assets/tımelıne.png";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const StaticHelmet = memo(() => (
  <Helmet>
    <title>Blueberry Hikayesi | Patika Blueberry</title>
    <meta
      name="description"
      content="Patika Hikayesi ile lezzetli ve sağlıklı tarifleri keşfedin. Blueberry reçelleri, smoothieler ve tatlılarla doğallığın tadını çıkarın."
    />
    <meta
      name="keywords"
      content="blueberry hikayesi, doğal meyve, sağlıklı tarifler, reçel, tatlı tarifleri"
    />
    <meta property="og:title" content="Blueberry Hikayesi" />
    <meta property="og:image" content="/assets/tımelınehıkayearasıfoto.jpg" />
  </Helmet>
));

const AnimatedBlock = ({ children }) => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const StoryPage = () => (
  <div className="bg-gray-50 py-8 px-4">
    <StaticHelmet />
    <div className="max-w-5xl mx-auto mb-12">
      <AnimatedBlock>
        <LazyLoad height={100} className="flex justify-center " once>
          <LazyLoadImage
          effect="black-and-white"
            src={HikayeBaslik}
            alt="Hikaye Başlığı"
            className="mx-auto object-cover mb-8 max-w-xs"
          />
        </LazyLoad>
      </AnimatedBlock>

      <AnimatedBlock>
        <Card hoverable className="shadow-lg p-4">
          <p className="text-gray-700 text-lg leading-relaxed font-hussar">
            • Çiftliğimiz, <span style={{color:'#1C75BC'}}>1200 metre rakımda</span> yer almakta olup, bu yükseklik
            bölgeye özgü <span style={{color:'#1C75BC'}}>ideal iklim koşullarının</span> sağlanmasına yardımcı oluyor.
            Yüksek rakım, meyvelerimizin aromasını geliştirirken aynı zamanda{" "}
            <span style={{color:'#1C75BC'}}>daha sağlıklı ve uzun raf ömrüne</span> sahip olmalarını sağlıyor.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4 font-hussar">
            • Kurulum öncesi, toprak analizleri{" "}
            <span style={{color:'#1C75BC'}}>Prof. Dr. Aysan Şentürk</span> ve ekibi tarafından titizlikle yapılmıştır.
            Toprağımızın{" "}
            <span style={{color:'#1C75BC'}}>organik seviyesi oldukça yüksek</span> olup, pH seviyesi ortalama{" "}
            <span style={{color:'#1C75BC'}}>4.8-5.2</span> civarındadır. Bu pH aralığı, blueberry için ideal bir ortam
            sağlar.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4 font-hussar">
            • Çiftliğimizde her şey doğaya ve çevreye saygı ile yapılmaktadır.{" "}
            <span style={{color:'#1C75BC'}}>Kimyasal gübreler</span> veya zararlılarla mücadele için sentetik ilaçlar
            kullanmıyoruz. Tüm yetiştirme sürecimiz,{" "}
            <span style={{color:'#1C75BC'}}>doğa dostu ve organik yöntemlerle</span> gerçekleştirilir.
          </p>
        </Card>
      </AnimatedBlock>
<br />
<br /><br /><br />
      <AnimatedBlock>
        <LazyLoadImage effect="black-and-white" src={Fotograf} alt="Hikaye Arası Fotoğraf" className="rounded-lg" />
      </AnimatedBlock>
 <br /><br /><br />
      <AnimatedBlock>
        <LazyLoad height={500} once placeholder={<div className="h-80" />}>
          <Image
            src={TimelineImage}
            preview={false}
            alt="Patika'nın Hikayesi"
            className="object-cover rounded-lg"
          />
        </LazyLoad>
      </AnimatedBlock>
    </div>
  </div>
);

export default StoryPage;

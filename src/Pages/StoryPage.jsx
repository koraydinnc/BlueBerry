import { Card, Image } from "antd";
import { motion } from "framer-motion";
import Fotograf from "../assets/tımelınehıkayearasıfoto.jpg";
import HikayeBaslik from "../assets/baslık.png";
import TimelineImage from "../assets/tımelıne.png";

const StoryPage = () => {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 text-center mr-4"
        >
          <img
            src={HikayeBaslik}
            alt="Hikaye Başlığı"
            className="mx-auto object-cover max-w-80"
          />
        </motion.div>

        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <Card hoverable className="shadow-lg">
            <div className="p-4">
              <p className="text-gray-700 text-lg leading-relaxed font-hussar">
                • Çiftliğimiz, <span className="text-indigo-500">1200 metre rakımda</span> yer almakta olup, bu yükseklik bölgeye özgü <span className="text-indigo-500">ideal iklim koşullarının</span> sağlanmasına yardımcı oluyor. Yüksek rakım, meyvelerimizin aromasını geliştirirken aynı zamanda <span className="text-indigo-500">daha sağlıklı ve uzun raf ömrüne</span> sahip olmalarını sağlıyor.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4 font-hussar">
                • Kurulum öncesi, toprak analizleri <span className="text-indigo-500">Prof. Dr. Aysan Şentürk</span> ve ekibi tarafından titizlikle yapılmıştır. Toprağımızın <span className="text-indigo-500">organik seviyesi oldukça yüksek</span> olup, pH seviyesi ortalama <span className="text-indigo-500">4.8-5.2</span> civarındadır. Bu pH aralığı, blueberry için ideal bir ortam sağlar.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4 font-hussar">
                • Çiftliğimizde her şey doğaya ve çevreye saygı ile yapılmaktadır. <span className="text-indigo-500">Kimyasal gübreler</span> veya zararlılarla mücadele için sentetik ilaçlar kullanmıyoruz. Tüm yetiştirme sürecimiz, <span className="text-indigo-500">doğa dostu ve organik yöntemlerle</span> gerçekleştirilir.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <Image
            src={Fotograf}
            alt="Hikaye Arası Fotoğraf"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={TimelineImage}
            preview={false}
            alt="Patika'nın Hikayesi"
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default StoryPage;

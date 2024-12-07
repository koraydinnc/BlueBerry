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

  const textAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="mb-8 text-center mr-4"
        >
          <img
            src={HikayeBaslik}
            alt="Hikaye Başlığı"
            className="mx-auto object-cover max-w-40"
          />
        </motion.div>

        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
          className="mb-12"
        >
          <Card hoverable className="">
            <div className="p-4 space-y-4">
              {[
                "• Çiftliğimiz, 1200 metre rakımda yer almakta olup, bu yükseklik bölgeye özgü ideal iklim koşullarının sağlanmasına yardımcı oluyor. Yüksek rakım, meyvelerimizin aromasını geliştirirken aynı zamanda daha sağlıklı ve uzun raf ömrüne sahip olmalarını sağlıyor.",
                "• Kurulum öncesi, toprak analizleri Prof. Dr. Aysan Şentürk ve ekibi tarafından titizlikle yapılmıştır. Toprağımızın organik seviyesi oldukça yüksek olup, pH seviyesi ortalama 4.8-5.2 civarındadır. Bu pH aralığı, blueberry için ideal bir ortam sağlar.",
                "• Çiftliğimizde her şey doğaya ve çevreye saygı ile yapılmaktadır. Kimyasal gübreler veya zararlılarla mücadele için sentetik ilaçlar kullanmıyoruz. Tüm yetiştirme sürecimiz, doğa dostu ve organik yöntemlerle gerçekleştirilir.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 text-lg leading-relaxed font-hussar"
                  variants={textAnimation}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
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
          viewport={{ once: false, amount: 0.3 }}
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

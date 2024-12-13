import BG from '../assets/SiparisFotograf/background.jpg';
import MinPhoto from '../assets/SiparisFotograf/mınımumbox.png';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import { Col } from 'antd';
import Whatsapp from '../components/Whatsapp';

const OrderPage = () => {
  const leftBoxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 0.8 },
    }),
  };

  const rightBoxVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 0.8 },
    }),
  };


  const bottomBoxVariants = {
    hidden: {opacity: 0 , y: 200},
    visible: {
      opacity:1,
      y:0,
      transition: {delay: 0.4, duration: 0.6}
    }
  }

  const minPhotoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
     <Helmet>
        <title>Blueberry Sipariş Ver</title>
        <meta
          name="description"
          content="Patika Blueberry olarak, İstanbul, İzmir, Bursa ve Eskişehir'e özel teslimat imkanı ile taze yaban mersinlerini kapınıza getiriyoruz. Hemen sipariş verin!"
        />
        <meta
          name="keywords"
          content="blueberry sipariş, yaban mersini, taze meyve, İstanbul teslimat, İzmir teslimat, Bursa teslimat, Eskişehir teslimat, Patika Blueberry"
        />
        <meta name="author" content="Patika Blueberry" />

        <meta property="og:title" content="Blueberry Sipariş Ver | İstanbul, İzmir ve Bursa Teslimat" />
        <meta
          property="og:description"
          content="Patika Blueberry olarak, İstanbul, İzmir, Bursa ve Eskişehir'e özel teslimat imkanı ile taze yaban mersinlerini kapınıza getiriyoruz. Hemen sipariş verin!"
        />
        <meta property="og:image" content={`${BG}`} />
        <meta property="og:url" content="https://patikablueberrygarden.com/SiparisVer" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blueberry Sipariş Ver | İstanbul, İzmir ve Bursa Teslimat" />
        <meta
          name="twitter:description"
          content="Patika Blueberry olarak, İstanbul, İzmir, Bursa ve Eskişehir'e özel teslimat imkanı ile taze yaban mersinlerini kapınıza getiriyoruz. Hemen sipariş verin!"
        />
        <meta name="twitter:image" content={`${BG}`} />

        {/* Mobile Friendly */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://patikablueberry.com/siparis" />
      </Helmet>
      <div style={{ paddingRight: '24px' }} className="absolute left-0 right-1/2 top-1/4 flex flex-col gap-12 w-1/2">
      <motion.img
  src={MinPhoto}
  alt="Minimum Box"
  className="
    absolute 
    top-[-10%] left-[15%]  // Default (sm)
    md:top-[-15%] md:left-[50%] // Tablet
    lg:top-[-20%] lg:left-[50%] // Large screens
    xl:top-[-15%] xl:left-[60%] // Extra-large screens
    transform -translate-x-1/2 w-24 sm:w-24 md:w-44 lg:w-56 xl:w-56 h-auto
  "
  initial="hidden"
  animate="visible"
  variants={minPhotoVariants}
/>

  {[0, 1].map((i) => (
    <motion.div
      key={i}
      custom={i}
      initial="hidden"
      animate="visible"
      variants={leftBoxVariants}
      className="bg-green-800 bg-opacity-80 shadow-md p-6 rounded-e-full text-end"
    >
      <h3 className="font-hussar md:text-2xl text-white text-nowrap justify-center items-center flex-end">
        {i === 0 ? '3kg siparişte' : '10kg ve üzeri'}
      </h3>
    </motion.div>
  ))}
</div>

 
      {/* Sağ Kutular */}
      <div style={{paddingLeft:'24px'}} className="absolute right-0 left-1/2 top-1/4 flex flex-col gap-12 w-1/2  ">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={rightBoxVariants}
            className="bg-blue-900 bg-opacity-80 shadow-md p-6 rounded-s-full text-start"
          >
            <h3 className="font-hussar md:text-2xl text-white items-center text-nowrap">
              {i === 0 ? "kg 400₺" : "kg 350₺"}
            </h3>
          </motion.div>
        ))}
     
      </div>
      <Col
  className="flex flex-col justify-center items-center w-full xl:mb-24"
  xs={24}
  style={{
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    padding: "16px",
  }}
>
  <Col span={24}>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={bottomBoxVariants}
      className="p-4"
    >
      <h3 className="font-hussar md:text-5xl text-white text-wrap text-center">
        İstanbul, İzmir, Bursa ve Eskişehir'e <br /> kendi aracımızla teslimat.
      </h3>
    </motion.div>
  </Col>

  <Col span={24} className="flex justify-center">
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      variants={bottomBoxVariants}
      className="p-4 bg-opacity-90 rounded-lg"
    >
      <Whatsapp phoneNumber={905324400557} />
    </motion.div>
  </Col>
</Col>


      

         

    </div>
  );
};

export default OrderPage;

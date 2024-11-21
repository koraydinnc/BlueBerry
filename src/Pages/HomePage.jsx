import BlueberryImage from "../assets/HomePage/anasfgrsl1.png";
import FarmImage from "../assets/HomePage/anasfgrsl2.png";
import OrganicIcon from "../assets/HomePage/organıkıcon.png";
import LocalProductionIcon from "../assets/HomePage/yerlıuretımıcon.png";
import HealthyIcon from "../assets/HomePage/saglıklııcon.png";
import Dogal from "../assets/HomePage/%100dogal.png";

const HomePage = () => {
  return (
    <div className="bg-white h-screen">
      <section className="relative h-1/2 flex flex-col items-center justify-center text-center">
        <img
          src={BlueberryImage}
          alt="Blueberry"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative p-8 rounded-md max-w-3xl z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-blue-800 leading-snug">
            “Beslenmenizde tek bir değişiklik yapacaksanız,<br />
            o da yaban mersini eklemek olmalı.”
          </h1>
          <img src={Dogal} alt="Doğal"  />
        </div>
      </section>

      <section className="relative h-1/2 bg-white">
        <div
          className="absolute inset-x-0 top-0 -mt-12 h-20 bg-white z-10"
          style={{
            clipPath: "ellipse(150% 90% at 50% 0%)",
          }}
        ></div>
        <img src={FarmImage} alt="Farm" className="w-full h-96 object-cover" />
        <div className="relative text-center -mt-16 z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            “75 dekarlık tarlalarımızda blueberry'lerimizi sizler için
            üretiyoruz.”
          </h2>
        </div>

        {/* İkonlar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 text-center">
          <div className="flex flex-col items-center">
            <img src={OrganicIcon} alt="Organik" className="w-40 h-40" />
            <span className="text-xl font-bold text-gray-700 mt-4">
              ORGANİK
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LocalProductionIcon}
              alt="Yerli Üretim"
              className="w-40 h-40"
            />
            <span className="text-xl font-bold text-gray-700 mt-4">
              YERLİ ÜRETİM
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src={HealthyIcon} alt="Sağlıklı" className="w-40 h-40" />
            <span className="text-xl font-bold text-gray-700 mt-4">
              SAĞLIKLI
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

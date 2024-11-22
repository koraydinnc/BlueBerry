import BlueberryImage from "../assets/HomePage/anasayfa1.jpg";
import OrganicIcon from "../assets/HomePage/anasayfa3.jpg";
import LocalProductionIcon from "../assets/HomePage/anasayfa4.jpg";
import HealthyIcon from "../assets/HomePage/anasayfa5.jpg";

const HomePage = () => {
  return (
    <div className="min-h-full bg-white">
      <section className="relative top-0">
        <img
          src={BlueberryImage}
          alt="Blueberries"
          className="w-full object-cover h-screen" 
          style={{ marginTop: 0, paddingTop: 0 }}
        />
      </section>

      {/* Middle Section */}
      <section className="relative">
        <img src={FarmImage} alt="Farm" className="w-full object-cover h-96" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold">
            “75 dekarlık tarlalarımızda blueberry'lerimizi sizler için üretiyoruz.”
          </h2>
        </div>
      </section>

      {/* Icon Section */}
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Organic */}
          <div className="flex flex-col items-center">
            <img src={OrganicIcon} alt="Organik" className="w-32 h-32" />
            <p className="text-lg font-bold mt-4">ORGANİK</p>
          </div>
          {/* Local Production */}
          <div className="flex flex-col items-center">
            <img src={LocalProductionIcon} alt="Yerli Üretim" className="w-32 h-32" />
            <p className="text-lg font-bold mt-4">YERLİ ÜRETİM</p>
          </div>
          {/* Healthy */}
          <div className="flex flex-col items-center">
            <img src={HealthyIcon} alt="Sağlıklı" className="w-32 h-32" />
            <p className="text-lg font-bold mt-4">SAĞLIKLI</p>
          </div>
        </div>
      </section>

      {/* Footer Recipe Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Tarifler</h3>
          <p>Here you can add additional recipe cards or images for the "Tarifler" section as needed.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

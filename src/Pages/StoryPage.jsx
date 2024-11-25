import { Card, Image } from "antd";
import Fotograf from "../assets/tımelınehıkayearasıfoto.jpg";
import HikayeBaslik from "../assets/baslık.png";
import TimelineImage from "../assets/tımelıne.png";

const StoryPage = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center mr-4">
          <img
            
            src={HikayeBaslik}
            alt="Hikaye Başlığı"
            className="mx-auto object-cover max-w-80"
          />
        </div>

        <div className="mb-12">
          <Card hoverable className="shadow-lg">
            <div className="p-4">
              <p className="text-gray-700 text-lg leading-relaxed font-hussar">
                2018 yılında serüvenimiz ülkemizin nadir iklim koşullarında yetişen ilk blueberry fidanı ile başladı. 
                Bugün, doğanın gücü ile beraber yetiştiriciliğin tüm koşullarını profesyonel bir şekilde geliştirdiğimiz 
                bahçemiz 75 dekarlık bir alan buldu. Yeni üretim alanları ile birlikte Tuzla Köyü, Türkiye'nin en fazla 
                üretimin gerçekleştiği blueberry köyü olacaktır.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4 font-hussar">
                Organik ve tamamen doğal üretim alanımız, ... (buraya üretim, organik ve sürdürülebilirlik ile alakalı 
                bilgiler gerek). Örneğin, ... ormanının kıyısında kendi iklim koşullarına tamamen uymasından kaynaklı 
                blueberry yetiştiriciliği için bize harika olanaklar sağlıyor.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4 font-hussar">
                2023 verilerini göz önüne aldığımızda blueberry miktarının %37'si Amerika, %24'ü Kanada, %6'sı İspanya 
                olmakla beraber bu veri Türkiye'de %0,064. Bu uygun iklim koşulları ve profesyonel ekibimiz ile birlikte 
                bu sayıyı artırmak ve bu sağlıklı meyveyi sofralarınıza ekleyerek hem doğaya hem de toplumumuza fayda 
                sağlamak için çalışıyoruz.
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <Image
            src={Fotograf}
            alt="Hikaye Arası Fotoğraf"
            className="rounded-lg"
          />
        </div>

        <div>
          <Image
            src={TimelineImage}
            preview={false}
            alt="Patika'nın Hikayesi"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryPage;

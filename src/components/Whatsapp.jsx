import { Image } from 'antd';
import React from 'react';
import BG from '../assets/SiparisFotograf/wphattı.png';

const Whatsapp = ({ phoneNumber, message }) => {
  const encodeMessage = encodeURIComponent(
    message ||
      'Merhaba, öncelikle sağlıklı ve mutlu günler dilerim.\n\nFiyatlarımız;\n\nMinimum 3kg siparişte kg 400 TL,\n10 kg ve üzeri 350 TL\n\nİstanbul, İzmir, Bursa ve Eskişehir\'e kendi aracımızla teslim ediyoruz'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;

  const handleRedirect = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleRedirect}
        className="bg-transparent text-white font-bold py-2 px-16 flex items-center gap-2"
      >
        <Image
          preview={false}
          src={BG}
          className="w-5 h-5"
          alt="WhatsApp Icon"
        />
      </button>
    </div>
  );
};

export default Whatsapp;

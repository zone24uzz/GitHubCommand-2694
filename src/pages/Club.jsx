import React from "react";
import HouseImg from "./../assets/house.png";
import HeaderImg from "./../assets/Header.png";
import Footer from "../components/Footer";


const Club = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-sans bg-white text-black">
      {/* Header */}

      {/* Banner */}
      <div className="bg-cyan-500 text-white text-center py-6 text-xl font-semibold">
        ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
      </div>

      {/* Image */}
      <div className="flex justify-center py-8">
        <img
          src={HouseImg}
          alt="club"
          className="w-[1000px] max-w-full object-contain"
        />
      </div>

      {/* Form */}
      <div className="max-w-[500px] mx-auto py-10 px-4">
        <h2 className="text-center text-xl font-semibold mb-6">
          ОТПРАВИТЬ ЗАЯВКУ
        </h2>

        <div className="flex flex-col gap-4">
          <input className="border-b p-2 outline-none" placeholder="ВАШЕ ИМЯ" />
          <input className="border-b p-2 outline-none" placeholder="E-MAIL" />
          <input
            className="border-b p-2 outline-none"
            placeholder="+998 (99) 999-99-99"
          />
          <input className="border-b p-2 outline-none" placeholder="ГОРОД" />

          {/* Radio */}
          <div>
            <p className="text-sm mb-2">ХОТИТЕ ОТКРЫТЬ:</p>
            <div className="flex flex-col gap-1 text-sm">
              <label className="flex gap-2"><input type="radio" name="type" /> Фитнес клуб</label>
              <label className="flex gap-2"><input type="radio" name="type" /> Йога клуб</label>
              <label className="flex gap-2"><input type="radio" name="type" /> Персональная студия</label>
            </div>
          </div>

          {/* Checkbox */}
          <div>
            <p className="text-sm mb-2">КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</p>
            <div className="flex flex-col gap-1 text-sm">
              <label className="flex gap-2"><input type="checkbox" /> Консалтинг</label>
              <label className="flex gap-2"><input type="checkbox" /> Маркетинг</label>
              <label className="flex gap-2"><input type="checkbox" /> Подбор оборудования</label>
            </div>
          </div>

          <textarea
            className="border-b p-2 outline-none"
            placeholder="КОММЕНТАРИЙ"
          />

          <button className="bg-cyan-500 text-white py-2 mt-4 rounded">
            ОТПРАВИТЬ
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Club;
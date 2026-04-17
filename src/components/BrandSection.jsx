import React from 'react'
import Bg from '../assets/Bg-two.jpg'

const BrandSection = () => {
  return (
    <div>
        <div className="relative w-full ">

      <img  src={Bg}  alt="True Fitness"  className="w-full h-250 object-cover" />

     
      <div className="absolute inset-0 bg-black/40 w-350 mx-auto my-20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
        
        <div className="text-yellow-400 text-xl font-bold tracking-wider mb-2">
          TRUE FITNESS
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          ПОЛУЧИТЕ<br />
          <span className="text-[#00ccff] block text-4xl md:text-6xl">
            ЭКСКЛЮЗИВНОЕ<br />ПРЕДЛОЖЕНИЕ НА<br />ТРЕНАЖЕРЫ
          </span>
          TRUE FITNESS
        </h1>

        <p className="pb-5 text-yellow-400">
          Мы будем рады проконсультировать вас и помочь с подбором оборудования
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
          <input className="flex-1 bg-white px-6 py-4 rounded-lg text-black focus:outline-none text-lg" type="text" placeholder="Имя" />

          <div className="flex gap-2 flex-1">
          

            
            <input className="flex-1 bg-white  outline-none px-6 py-4 rounded-lg text-black focus:outline-none text-lg" type="tel" placeholder=" (99)-999-99-99"  />
          </div>

          <input className="flex-1 px-6 bg-white py-4 rounded-lg text-black focus:outline-none text-lg"  type="email"  placeholder="E-MAIL"  />

          <button className="bg-[#00ccff] hover:bg-[#00b8e6] transition-colors px-10 py-4 rounded-lg font-semibold text-lg whitespace-nowrap">
            ОТПРАВИТЬ
          </button>
        </div>

        <p className="pt-5 text-2xl font-medium">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и<br />
          соглашаетесь с политикой конфиденциальности
        </p>

      </div>
    </div>
    </div>
  )
}

export default BrandSection
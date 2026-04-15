import rectangleImg from '../assets/Rectangle 28.png'
import uzb from '../assets/uzb.png'

const Categories = () => {
  return (
    <section className="relative w-full  flex items-center justify-center py-8">
      <img src={rectangleImg} alt="background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 bg-white p-8 max-w-md w-full mx-4 shadow-lg">
        <h2 className="text-black font-bold text-xl uppercase leading-snug mb-2">
          ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Мы будем рады проконсультировать вас и помочь с подбором оборудования
        </p>
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="ИМЯ" className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0099CC] placeholder-gray-400" />
          <input type="email" placeholder="EMAIL" className="border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0099CC] placeholder-gray-400" />
          <div className="flex items-center border border-gray-300 px-4 py-3 gap-2">
            <img src={uzb} alt="UZ" className="w-6 h-4 object-cover" />
            <span className="text-gray-400 text-sm">+998</span>
            <input type="tel" placeholder="(99) 999-99-99" className="flex-1 outline-none text-sm placeholder-gray-400" />
          </div>
          <button className="bg-[#0099CC] text-white font-bold py-3 text-sm uppercase tracking-wider hover:bg-[#007aaa] transition-colors">
            ОТПРАВИТЬ
          </button>
        </div>
        <p className="text-gray-400 text-xs mt-4 leading-relaxed">
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных в соответствии с политикой конфиденциальности
        </p>
      </div>
    </section>
  )
}

export default Categories

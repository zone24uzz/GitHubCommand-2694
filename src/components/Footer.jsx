import trueFitnessLogo from '../assets/© TRUE FITNESS.png'

const Footer = () => {
  return (
    <footer className="bg-[#0099CC] text-white py-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-sm uppercase mb-4 tracking-wide">КАТАЛОГ ТОВАРОВ</h4>
          <ul className="flex flex-col gap-2 text-xs text-white/80">
            <li><a href="#" className="hover:text-white">КАРДИО ТРЕНАЖЕРЫ</a></li>
            <li><a href="#" className="hover:text-white">СИЛОВЫЕ ЭЛЕМЕНТЫ</a></li>
            <li><a href="#" className="hover:text-white">TRUE STRETCH</a></li>
            <li><a href="#" className="hover:text-white">САЙКЛИНГ</a></li>
            <li><a href="#" className="hover:text-white">ГРУППОВЫЕ ТРЕНАЖЕРЫ</a></li>
            <li><a href="#" className="hover:text-white">СИЛОВЫЕ ТРЕНАЖЕРЫ</a></li>
            <li><a href="#" className="hover:text-white">АКСЕССУАРЫ</a></li>
            <li className="mt-4">
              <img src={trueFitnessLogo} alt="TRUE FITNESS" className="h-5 object-contain" />
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase mb-4 tracking-wide">ИНФОРМАЦИЯ</h4>
          <ul className="flex flex-col gap-2 text-xs text-white/80">
            <li><a href="#" className="hover:text-white">О БРЕНДЕ</a></li>
            <li><a href="#" className="hover:text-white">ПРЕИМУЩЕСТВА</a></li>
            <li><a href="#" className="hover:text-white">ОТКРЫТЬ КЛУБ</a></li>
            <li><a href="#" className="hover:text-white">ПРОДУКЦИЯ</a></li>
            <li><a href="#" className="hover:text-white">КОНТАКТЫ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase mb-4 tracking-wide">КОНТАКТЫ</h4>
          <ul className="flex flex-col gap-2 text-xs text-white/80">
            <li><a href="#" className="hover:text-white">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a></li>
            <li><a href="#" className="hover:text-white">КОНТАКТЫ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase mb-4 tracking-wide">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer

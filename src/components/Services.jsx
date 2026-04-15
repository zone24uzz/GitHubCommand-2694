import maskGroup from '../assets/image 7.png'
import icon1 from '../assets/Mask group (6).png'
import icon2 from '../assets/Youtube.png'
import icon3 from '../assets/Group.png'
import icon4 from '../assets/Vector (2).png'
import icon5 from '../assets/Vector (1).png'
import icon6 from '../assets/Vector.png'

const services = [
  { icon: icon1, title: 'КОНСАЛТИНГ', desc: 'Помогаем в разработке концепции клуба, зонировании, оснащении и расчёте финансовых показателей.' },
  { icon: icon2, title: 'МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ', desc: 'Полный цикл пуско-наладочных работ, а также сервисное обслуживание тренажеров.' },
  { icon: icon3, title: 'ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ', desc: 'Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.' },
  { icon: icon4, title: 'ФИРМЕННЫЙ SHOW-ROOM', desc: 'Проходите тест-драйв оборудования перед приобретением.' },
  { icon: icon5, title: 'ПОСТАВКА ЗАПЧАСТЕЙ', desc: 'Поставка как гарантийных, так и постгарантийных запчастей.' },
  { icon: icon6, title: 'ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ', desc: 'Мы доставляем оборудование по всему Узбекистану.' },
]

const Services = () => {
  return (
    <section className="flex w-full">
      <div className="w-[60%] bg-[#f0f0f0] px-10 py-12 flex flex-col justify-center">
        <h2 className="text-[#0099CC] text-xl font-bold leading-snug mb-10 uppercase">
          МЫ ПРЕДЛАГАЕМ<br />ПОЛНЫЙ КОМПЛЕКС УСЛУГ
        </h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col gap-3">
              <img
                src={s.icon}
                alt={s.title}
                className="w-12 h-12 object-contain"
                style={{ filter: 'invert(40%) sepia(90%) saturate(500%) hue-rotate(170deg) contrast(101%)' }}
              />
              <h3 className="text-black font-bold text-[12px] uppercase leading-tight">{s.title}</h3>
              <p className="text-gray-500 text-[11px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%]">
        <img
          src={maskGroup} alt="TRUE Fitness"className="w-250 h-180 " />
      </div>
    </section>
  )
}

export default Services

import card1 from '../assets/home-card-bg-1.png'
import card2 from '../assets/home-card-bg-2.png'

const HomeCards = () => {
  return (
    <div className='w-full mb-[60px]'>
      <div className='container max-w-[1440px] mx-auto px-[20px]'>
        <div
          className='grid grid-cols-1 md:grid-cols-2 gap-[4px]'
          style={{ gridTemplateRows: 'auto' }}
        >

          {/* Top-left: big image card */}
          <div
            className='relative bg-cover bg-center flex items-end p-[24px] md:p-[32px] h-[280px] md:h-[420px]'
            style={{ backgroundImage: `url(${card1})` }}
          >
            <div className='absolute inset-0 bg-black/40' />
            <div className='relative z-10'>
              <h3 className='text-white font-black text-[22px] md:text-[28px] leading-tight uppercase mb-[10px]'>
                ЛУЧШИЕ<br />ХАРАКТЕРИСТИКИ
              </h3>
              <div className='w-[40px] h-[3px] bg-[#F5C518] mb-[10px] md:mb-[14px]' />
              <p className='text-white text-[12px] md:text-[13px] leading-[1.6]'>
                Наши тренажеры имеют самые совершенные характеристики в классе — от более мощных технических показателей до расширенных функциональных возможностей.
              </p>
            </div>
          </div>

          {/* Top-right: blue text card */}
          <div className='bg-[#01AEE7] flex flex-col justify-center p-[24px] md:p-[32px] h-[240px] md:h-[420px]'>
            <h3 className='text-white font-black text-[22px] md:text-[28px] leading-tight uppercase mb-[10px]'>
              НИЗКАЯ СТОИМОСТЬ<br />ВЛАДЕНИЕ
            </h3>
            <div className='w-[40px] h-[3px] bg-[#F5C518] mb-[10px] md:mb-[14px]' />
            <p className='text-white text-[12px] md:text-[13px] leading-[1.6]'>
              Надежность Оборудования Обеспечивает Низкие Затраты На Сервисное Обслуживание, Так По Стоимости Затрат На Эксплуатацию TRUE Выигрывает У Конкурентов.
            </p>
          </div>

          {/* Bottom-left: light text card */}
          <div className='bg-[#01AEE7] flex flex-col justify-center p-[24px] md:p-[32px] h-[240px] md:h-[300px]'>
            <h3 className='text-black font-black text-[22px] md:text-[28px] leading-tight uppercase mb-[10px]'>
              ВЫСОКОЕ КАЧЕСТВО И<br />НАДЕЖНОСТЬ
            </h3>
            <div className='w-[40px] h-[3px] bg-[#F5C518] mb-[10px] md:mb-[14px]' />
            <p className='text-gray-600 text-[12px] md:text-[13px] leading-[1.6]'>
              Высокое Качество Тренажеров — Это Визитная Карточка TRUE. Кроме Того TRUE Предоставляет До 5 Лет Гарантии На Кардиотренажеры.
            </p>
          </div>

          {/* Bottom-right: big image card */}
          <div
            className='relative bg-cover bg-center flex items-end p-[24px] md:p-[32px] h-[280px] md:h-[300px]'
            style={{ backgroundImage: `url(${card2})` }}
          >
            <div className='absolute inset-0 bg-black/40' />
            <div className='relative z-10'>
              <h3 className='text-white font-black text-[22px] md:text-[28px] leading-tight uppercase mb-[10px]'>
                КАЧЕСТВЕННЫЕ И<br />ОПЕРАТИВНЫЙ СЕРВИС
              </h3>
              <div className='w-[40px] h-[3px] bg-[#F5C518] mb-[10px] md:mb-[14px]' />
              <p className='text-white text-[12px] md:text-[13px] leading-[1.6]'>
                Оборудование Должно Работать Бесперебойно — Поэтому Мы Уделяем Особое Внимание Наличию Всех Необходимых Запчастей И Высокой Срочности Технического Реагирования.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeCards

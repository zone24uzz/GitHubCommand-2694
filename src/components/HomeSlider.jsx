import { useState } from 'react'
import sliderBg from '../assets/home-slider-bg.png'
import slide1 from '../assets/home-slide-1.png'
import slide2 from '../assets/home-slide-2.png'
import slide3 from '../assets/home-slider-3.png'

const slides = [
  {
    title: 'TRUE',
    subtitle: 'FITNESS',
    description: 'СОВРЕМЕННОЕ И НАДЕЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ',
    link: 'КАРДИО ТРЕНАЖЕРЫ',
    img: slide1,
  },
  {
    title: 'TRUE',
    subtitle: 'FITNESS',
    description: 'СОВРЕМЕННОЕ И НАДЕЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ',
    link: 'КАРДИО ТРЕНАЖЕРЫ',
    img: slide2,
  },
  {
    title: 'TRUE',
    subtitle: 'FITNESS',
    description: 'СОВРЕМЕННОЕ И НАДЕЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ',
    link: 'КАРДИО ТРЕНАЖЕРЫ',
    img: slide3,
  },
]

const HomeSlider = () => {
  const [current, setCurrent] = useState(0)
  const slide = slides[current]

  return (
    <div className='w-full overflow-hidden bg-white'>
      <div className='container max-w-[1440px] mx-auto px-[20px]'>
        <div className='flex items-center justify-between h-[420px] relative'>

          {/* Left text */}
          <div className='flex flex-col max-w-[340px] z-10'>
            <h2 className='text-[48px] font-black text-black leading-none'>{slide.title}</h2>
            <h2 className='text-[48px] font-black text-[#01AEE7] leading-none mb-[16px]'>{slide.subtitle}</h2>
            <div className='w-[40px] h-[3px] bg-[#F5C518] mb-[24px]'></div>
            <p className='font-bold text-black text-[14px] leading-[1.6] mb-[24px]'>{slide.description}</p>
            <a href='#' className='text-[#01AEE7] font-bold flex items-center gap-[8px]'>
              {slide.link} <span>→</span>
            </a>
          </div>

          {/* Right: bg + image together */}
          <div className='relative flex items-center justify-center w-[55%] h-full'>
            <img src={sliderBg} alt='' className='absolute right-0 top-0 h-full object-contain object-right' />
            <img src={slide.img} alt='slide' className='relative z-10 h-full object-contain' />
          </div>

        </div>

        {/* Dots */}
        <div className='flex justify-center gap-[8px] mt-[24px] pb-[16px]'>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-[12px] h-[12px] rounded-full transition-colors ${i === current ? 'bg-[#F5C518]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeSlider

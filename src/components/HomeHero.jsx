import bgImg from '../assets/home-hero-img.png'
import pause from '../../public/pause.svg'

const HomeHero = () => {
  return (
    <div className='w-full bg-center bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
      <div className='container max-w-[1440px] mx-auto w-full px-[20px] flex flex-col items-center justify-center py-[60px] md:py-[120px]'>
        <img className='hover:scale-125 transition-all cursor-pointer w-[48px] md:w-auto' src={pause} alt="" />
        <h1 className='text-white font-bold text-[28px] md:text-[50px] text-center mt-[16px]'>
          TRUE FITNESS - ПРЕМИУМ<br />ТРЕНАЖЕРЫ ИЗ США
        </h1>
      </div>
    </div>
  )
}

export default HomeHero

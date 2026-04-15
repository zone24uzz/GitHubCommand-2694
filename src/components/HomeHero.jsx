import React from 'react'
import bgImg from '../assets/home-hero-img.png'
import pause from '../../public/pause.svg'


const HomeHero = () => {
    return (
        <div className='h-100% w-100% bg-center bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='container max-w-[1440px] mx-auto w-full px-[20px] flex flex-col items-center justify-center py-[120px]'>
                <img className='hover:scale-125 transition-all cursor-pointer' src={pause} alt="" />
                <h1 className='text-white font-bold text-[50px] text-center'>TRUE FITNESS - ПРЕМИУМ<br></br> ТРЕНАЖЕРЫ ИЗ США</h1>
            </div>
        </div>
    )
}

export default HomeHero
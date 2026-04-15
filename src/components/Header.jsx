import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.svg'
import flag from '../../public/flag.svg'
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from 'react-icons/io'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <div className='container max-w-[1440px] mx-auto w-full px-[20px] mb-[16px]'>

        {/* Top row */}
        <div className='flex items-center justify-between md:justify-center md:gap-[200px] py-[12px]'>
          <img src={logo} alt="logo" className='h-[40px] md:h-auto' />

          {/* Desktop: flag + phone + button */}
          <div className='hidden md:flex flex-col'>
            <IoMdArrowDropdown className='self-start ml-[20px] cursor-pointer' />
            <div className='flex items-center justify-between gap-[16px]'>
              <img src={flag} alt="flag" />
              <p>+998 (90)-606-66-66</p>
            </div>
            <button className='px-[40px] py-[9px] bg-[#01AEE7] text-white font-bold mt-[10px] w-full cursor-pointer'>
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </div>

          {/* Mobile: burger */}
          <button className='md:hidden text-[28px]' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        <div className='bg-black h-[2px] mb-[16px] mt-[4px]'></div>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center font-bold justify-between pb-[8px]'>
          <NavLink className='text-black' to='/'>ДОМ</NavLink>
          <NavLink className='text-black' to='/brand'>О БРЕНДЕ</NavLink>
          <NavLink className='text-black' to='/prem'>ПРЕИМУЩЕСТВА</NavLink>
          <NavLink className='text-black' to='/club'>КЛУБ</NavLink>
          <NavLink className='text-black' to='/contact'>КОНТАКТЫ</NavLink>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className='md:hidden flex flex-col gap-[16px] pb-[16px] font-bold'>
            <NavLink className='text-black' to='/' onClick={() => setMenuOpen(false)}>ДОМ</NavLink>
            <NavLink className='text-black' to='/brand' onClick={() => setMenuOpen(false)}>О БРЕНДЕ</NavLink>
            <NavLink className='text-black' to='/prem' onClick={() => setMenuOpen(false)}>ПРЕИМУЩЕСТВА</NavLink>
            <NavLink className='text-black' to='/club' onClick={() => setMenuOpen(false)}>КЛУБ</NavLink>
            <NavLink className='text-black' to='/contact' onClick={() => setMenuOpen(false)}>КОНТАКТЫ</NavLink>
            <div className='flex items-center gap-[12px]'>
              <img src={flag} alt="flag" />
              <p>+998 (90)-606-66-66</p>
            </div>
            <button className='px-[24px] py-[9px] bg-[#01AEE7] text-white font-bold w-full cursor-pointer'>
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Header

import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.svg'
import flag from '../../public/flag.svg'
import { IoMdArrowDropdown } from 'react-icons/io'




const Header = () => {
  return (
    <div>
      <div className='container max-w-[1440px] mx-auto w-full px-[20px] mb-[16px]'>
        <div className='flex items-center justify-center gap-[200px]'>
          <img src={logo} alt="" />

          <div className='flex flex-col'>
            <IoMdArrowDropdown className='self-start ml-[20px] cursor-pointer' />
            <div className='flex items-center justify-between'>
              <img src={flag} alt="" />
              <p>+998 (90)-606-66-66</p>
            </div>
            <button className='px-[40px] py-[9px] bg-[#01AEE7] text-white font-bold mt-[10px] w-full cursor-pointer'>ОСТАВИТЬ ЗАЯВКУ</button>
          </div>

        </div>

        <div className='bg-black h-[2px] mb-[16px] mt-[16px]'></div>

        <div className='flex items-center font-bold justify-between'>
          <NavLink className={"text-black"} to={"/"}>ДОМ</NavLink>
          <NavLink className={"text-black"} to={"/brand"}>О БРЕНДЕ</NavLink>
          <NavLink className={"text-black"} to={"/prem"}>ПРЕИМУЩЕСТВА</NavLink>
          <NavLink className={"text-black"} to={"/club"}>КЛУБ</NavLink>
          <NavLink className={"text-black"} to={"/contact"}>КОНТАКТЫ</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
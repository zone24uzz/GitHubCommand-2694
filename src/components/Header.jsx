import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black'>
      <div className='container max-w-[1440px] mx-auto w-full px-[20px] bg-black'>
        <div className='flex items-center text-white font-bold justify-between'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/brand"}>Brand</NavLink>
          <NavLink to={"/prem"}>Prem</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
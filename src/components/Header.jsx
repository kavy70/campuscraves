import React from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoHelpBuoy } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
export default function Header() {
  const links = [
    {
      icon:<MdOutlineShoppingBag />,
      name:"Shop owner"
    },
    {
      icon:<IoIosSearch />,
      name:"Search"
    },
    {
      icon:<TbRosetteDiscount />,
      name:"Offers",
      sup:"New"
    },
    {
      icon:<IoHelpBuoy />,
      name:"Help"
    },
    {
      icon:<CgProfile />,
      name:"Sign in"
    },
    {
      icon:<IoCartOutline />,
      name:"Cart",
      count:"(0)"
    }
  ]
  return (
    <header className='p-[15px] shadow-xl sticky top-0 bg-white z-[9999]'>
      <div className=' max-w-[1200px] mx-auto flex items-center'>
        <div className=' max-w-[60px] '>
          <img src="images/logo2.webp" className=' w-[full]' alt="" />
        </div>
        <div className='' >
          <span className='font-bold border-b-[3px] border-[#3d4152] text-[#3d4152] hover:border-[#fc8019] hover:text-[#fc8019] cursor-pointer'>Depstar</span> Charusat <RxCaretDown fontSize={25} className='inline font-bold text-[#fc8019] hover:cursor-pointer'/>
        </div>
        <nav className='flex list-none gap-10 ml-auto  '>
          {
            links.map(
              (link,indx)=>{
                return <li className=' flex hover:drop-shadow items-center gap-1 hover:text-[#fc8019] cursor-pointer '>
                  {link.icon}
                  {link.name}
                  <sup><count className=' text-[#ff1201]  '>{link.sup} </count></sup> 
                  <sup>{link.count} </sup>
                </li>
              }
            )
          }
        </nav>

      </div>

    </header>
  )
}

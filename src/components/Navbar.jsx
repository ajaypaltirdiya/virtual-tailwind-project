import { Menu,X } from 'lucide-react';
import logo from '../assets/logo.png';
import {navItems} from '../constants'
import { useState } from 'react';

const Navbar = () => {
    const [mobileMenuDrawer,setMobileMenuDrawer] = useState(false);
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-md   border-b border-neutral-700/85">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className='flex items-center flex-shrink-0'>
                    <img src={logo} className='w-10 h-10 mr-2' alt="" />
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                <ul className="hidden lg:flex space-x-12 ml-14">
                    {navItems.map((menu,index) => (
                        <li key={index}><a href={menu.href} >{menu.label}</a></li>
                    ))}
                </ul>
                <div className="hidden lg:flex space-x-10 justify-center items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#"  className='py-2 px-3 rounded-md bg-gradient-to-tr from-orange-500 to-orange-800'>Create an account</a>
                </div>

                <div className="lg:hidden md:flex flex-col">
                    <button type='button' onClick={() => setMobileMenuDrawer(!mobileMenuDrawer)}>{mobileMenuDrawer?<X/>:<Menu/>}</button>
                    
                </div>
            </div>
            {mobileMenuDrawer && (
                <div className="fixed right-0 z-20 top-16 flex justify-center space-y-5 items-center flex-col py-10 bg-neutral-900 w-full lg:hidden">
                    <ul className='text-center'>
                        {navItems.map((menu,index) => (
                            <li key={index}><a href={menu.href} className='py-2 font-semibold block my-1'>{menu.label}</a></li>
                        ))}
                    </ul>

                    <div className="flex space-x-6 justify-center items-center">
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                        <a href="#"  className='py-2 px-3 rounded-md bg-gradient-to-tr from-orange-500 to-orange-800'>Create an account</a>
                    </div>
                </div>
            )}

        </div>
    </nav>
  )
}

export default Navbar
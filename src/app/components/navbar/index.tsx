import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";

export function Navbar() {
    const Links = [
        { name: "Sobre", link: "/" },
        { name: "Habilidades", link: "/" },
        { name: "Projetos", link: "/" },
        { name: "Equipe", link: "/" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <nav className='shadow-md w-full sticky top-0 left-0 font-viet bg-BLACK bg-opacity-90 z-50'>
            <div className='md:flex items-center justify-between bg-china-black py-6 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <img src={logo} />
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon color="white"/> : <Bars3Icon color="white"/>
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-extralight text-2xl'>
                                <Link to={link.link} className='text-white hover:text-yellow-400 duration-500'>{link.name}</Link>
                            </li>))
                    }
                    <button className='btn bg-black text-topaz md:ml-8 font-light text-2xl rounded-2xl duration-500 md:static md:hidden py-3 px-6'>
                    <Link to={'/login'}>
                        Contato
                    </Link>
                </button>
                </ul>
                {/* button */}
                <button className='btn bg-black text-topaz md:ml-8 font-light text-2xl rounded-2xl duration-500 md:static max-md:hidden py-3 px-6 text-ORANGE'>
                    <Link to={'/login'}>
                        Contato
                    </Link>
                </button>
            </div>
        </nav>
    );
}
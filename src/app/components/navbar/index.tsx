import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";

export function Navbar() {
    const Links = [
        { name: "Sobre", link: "sobre" },
        { name: "Habilidades", link: "habilidades" },
        { name: "Projetos", link: "projetos" },
        { name: "Equipe", link: "equipe" },
    ];

    const [open, setOpen] = useState(false);

    const handleScroll = (link: string) => {
        const section = document.getElementById(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className=' w-full sticky top-0 left-0 font-viet bg-BLACK  z-50'>
            <div className='md:flex items-center justify-between bg-china-black py-3 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <img src={logo} />
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)}
                     className='absolute right-8 top-6 cursor-pointer lg:hidden w-12 h-12 '>
                    {
                        open ? <XMarkIcon color="white" height={48}/> : <Bars3Icon color="white" height={48}/>
                    }
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-6 absolute max-lg:my-12 lg:static bg-opacity-90 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='lg:ml-8 lg:my-0 my-7 font-extralight text-2xl'>
                                {link.name !== 'Contato' ? <Link to={''} className='text-white
                                hover:text-yellow-400 duration-500' onClick={() => handleScroll(link.link)}>{link.name}</Link>
                                    : <Link to={''} className='text-white lg:hidden
                                hover:text-yellow-400 duration-500' onClick={() => handleScroll(link.link)}>{link.name}</Link>}
                            </li>))
                    }
                    <li className='lg:ml-8 lg:my-0 my-7 font-extralight text-2xl'>
                        <Link to={"/login"} className='text-white lg:hidden
                        hover:text-yellow-400 duration-500'>Contato</Link>
                    </li>
                </ul>
                {/* button */}
                <button
                    className='btn bg-black hover:bg-white text-topaz lg:ml-8 font-light text-2xl rounded-2xl duration-500 lg:static max-lg:hidden py-3 px-6 text-ORANGE'>
                    <Link to={'/login'}>
                        Contato
                    </Link>
                </button>
            </div>
        </nav>
    );
}
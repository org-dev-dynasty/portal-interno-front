import { Link } from "react-router-dom";
import logo from "../../../assets/image 15.png"
import { Heart, List, MagnifyingGlass, ShoppingBag, UserCircle } from "@phosphor-icons/react";


export function NavBar2() {
    return (
        <>
            <nav className='shadow-md w-full fixed top-0 left-0'>
                <div className='gap-4 md:flex items-center justify-between bg-white py-4 md:px-20 px-7'>
                    {/* Logo */}
                    <div className="py-4 px-10 md:w-1/2 text-center md:text-left">
                        <button>
                            <img src={logo} alt="Logo" className="md:h-16 h-16" />
                            <Link to={'/'} />
                        </button>
                        {/* Espaçador */}
                        <div className="flex-grow"></div>
                    </div>

                    {/* Menu */}
                    <div className="md:hidden max-md:absolute -translate-y-[55px]">
                        <List size={32} />
                    </div>

                    {/* Aba de Pesquisa */}
                    <div className="flex w-full gap-5 md:pr-[20%]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="items-center w-[100%] justify-center border-2 border-gray-300 rounded-full p-3"
                        />
                        <button type="submit">
                            <MagnifyingGlass size={32} />
                        </button>
                    </div>

                    {/* Icones */}
                    <div className="flex absolute justify-end gap-5 translate-x-[1100px] max-md:translate-x-[570px] max-md:-translate-y-[95px] max-sm:translate-x-[300px]">
                        <Link to={''}>
                            <Heart size={32} />
                        </Link>
                        <Link to={''}>
                            <UserCircle size={32} />
                        </Link>
                        <Link to={''}>
                            <ShoppingBag size={32} />
                        </Link>
                    </div>


                </div>
                {/* <div className="flex  bg-black justify-center gap-5 md:gap-10">
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                    <Link to={''} className="text-white text-2xl">MacBook</Link>
                </div> */}
            </nav>
        </>
    )
}  
import { MagnifyingGlass, Bell, UserCircle, List, SignOut, Gauge, BookOpen, PaintBrushBroad, Gear, ListChecks, Users } from '@phosphor-icons/react';
import Logo from "../../../assets/logo.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return (
        <header className="w-full sticky flex justify-between items-center bg-BACKGROUND-DARK p-4 text-gray-300">
            <div className="w-54 gap-5 flex ml-5 items-center bg-BACKGROUND-DARK">
                <button onClick={toggleMenu} className='w-full flex items-center hover:text-ORANGE'>
                    <List size={32} />
                </button>
            </div>
            <div className='ml-10'>
                <Link to={"/portalInterno"} >
                    <img src={Logo} alt="DevDynasty" className="w-full" />
                </Link>
            </div>
            <div className="w-full flex justify-center mx-auto items-center space-x-5">
                <MagnifyingGlass size={32} />
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="bg-BACKGROUND-DARK border-2 shadow-white shadow-3xl w-[40%] text-gray-300 px-2 py-1 rounded focus:outline-none"
                />
            </div>
            <div className="w-[30%] lg:w-[40%] flex justify-end items-center space-x-6 mr-5">
                <UserCircle size={32} />
                <div className='w-full' >
                    <p className='lg:text-sm w-full'>José Paulo Andrade</p>
                    <p className="text-md">Dev. FrontEnd</p>
                </div>
                <Bell size={24} />
            </div>
            {menuVisible && (
                <div
                    className={`fixed p-4 top-0 left-0 h-full xl:w-[23%] lg:w-[27%] bg-BACKGROUND-DARK text-gray-300 transform ${menuVisible ? 'translate-x-0' : '-translate-x-full'}  duration-500 ease-in-out z-50`}
                >
                    <div className='flex items-center mx-auto mt-1'>
                        <div className="w-[37%] ml-5 flex items-center">
                            <button onClick={toggleMenu} className='w-full flex items-center hover:text-ORANGE'>
                                <List size={32} />
                            </button>
                        </div>
                        <div className='mr-5 w-full'>   
                            <Link to={"/portalInterno"}>
                                <img src={Logo} alt="DevDynasty" className=" lg:w-[100%]" />
                            </Link>
                        </div>
                    </div>

                    <ul className="mt-16 ml-5 space-y-2">
                        <li className="flex items-center py-2 rounded hover:bg-ORANGE :text-white transition-colors cursor-pointer">
                            <Gauge size={24} className="mr-2" />
                            <Link to={''} /> Dashboard
                        </li>
                        <li className="flex items-center py-2 rounded hover:bg-ORANGE hover:text-white transition-colors cursor-pointer">
                            <BookOpen size={24} className="mr-2" />
                            <Link to={''} /> Projetos
                        </li>
                        <div className='border-2 border-white'></div>
                        <li className="flex items-center py-2 rounded hover:bg-ORANGE hover:text-white transition-colors cursor-pointer">
                            <PaintBrushBroad size={24} className="mr-2" />
                            <Link to={''} /> Design
                        </li>
                        <li className="flex items-center py-2 rounded hover:bg-ORANGE hover:text-white transition-colors cursor-pointer">
                            <Gear size={24} className="mr-2" />
                            <Link to={''} /> APIs
                        </li>
                        <div className='border-2 border-white'></div>
                        <li className="flex items-center py-2 rounded hover:bg-ORANGE hover:text-white transition-colors cursor-pointer">
                            <ListChecks size={24} className="mr-2" />
                            <Link to={''} /> Tasks
                        </li>
                        <li className="flex items-center py-2 rounded hover:bg-ORANGE hover:text-white transition-colors cursor-pointer">
                            <Users size={24} className="mr-2" />
                            <Link to={''} /> Membros
                        </li>
                        <div className='border-2 border-white'></div>
                        
                    </ul>
                    <li className="flex items-center ml-5 mt-52 py-2 rounded hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
                            <SignOut size={24} className="mr-2" /> Sair da Conta
                        </li>
                </div>
            )}
        </header>
    );
};



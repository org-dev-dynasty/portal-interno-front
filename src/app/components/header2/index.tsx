import { useState } from 'react';
import { Gauge, BookOpen, PaintBrushBroad, Gear, ListChecks, Users, SignOut, Bell, MagnifyingGlass, UserCircle, List, X } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/logo.png"
import cloudLogo from "../../../assets/cloudLogo.png"

export default function DashboardLayout({ children }: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: <Gauge size={24} />, path: '/portalInterno/home' },
        { name: 'Projetos', icon: <BookOpen size={24} />, path: '/portalInterno/projects' },
        { name: 'Design', icon: <PaintBrushBroad size={24} />, path: '/portalInterno/design' },
        { name: 'APIs', icon: <Gear size={24} />, path: '/portalInterno/apis' },
        { name: 'Tasks', icon: <ListChecks size={24} />, path: '/portalInterno/tasks' },
        { name: 'Membros', icon: <Users size={24} />, path: '/portalInterno/members' },
    ];

    function handleLogout() { 
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div className="flex h-screen bg-[#111111] text-gray-300">
            {/* Menu Lateral */}
            <div className={`bg-gradient-to-R w-60 p-5 flex flex-col space-y-4 ${isMenuOpen ? 'block' : 'hidden'} md:block max-sm:absolute sm:top-0 h-full z-50 shadow-r-lg shadow-3xl`}>
                <div className="flex items-center mb-12 gap-5">
                    <div className="text-ORANGE">
                        <img src={Logo} alt="" className='cursor-pointer' />
                    </div>
                    <button className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <X size={24} />
                    </button>
                </div>
                {menuItems.map((item, index) => (
                    <>
                        <Link
                            key={index}
                            to={item.path}
                            className={`flex items-center p-2 rounded-md transition-colors 
                ${location.pathname === item.path ? ' text-white' : 'hover:bg-ORANGE hover:text-white'}`}
                        >
                            {item.icon}
                            <span className="ml-3">{item.name}</span>
                        </Link>
                        <div className='border-2 border-white'></div>
                    </>
                ))}
               <button className="absolute bottom-4 left-5 w-[13%] max-sm:w-full" onClick={handleLogout}>
                    <p className="flex items-center p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors">
                        <SignOut size={24} className="mr-3" />
                        Sair da Conta
                    </p>
                    <div className='border-2 w-[60%] max-sm:w-[80%]  border-white mt-2'></div>
                </button>
            </div>

            {/* Conteúdo Principal */}
            <div className="flex-1 flex flex-col">
                <div className="bg-gradient-to-L flex items-center justify-between p-5 md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <List size={32} className="text-white" />
                    </button>
                    <div className="flex items-center ">
                        <div className="flex items-center space-x-4 max-md:justify-end max-sm:justify-end">
                            <div>
                                <UserCircle size={32} />
                            </div>
                            <div className="text-white">
                                José Paulo Andrade
                                <div className="text-sm text-white">Dev. FrontEnd</div>
                            </div>
                            <div className="text-white max-md:hidden max-sm:hidden">
                                <Bell size={24} className="text-gray-400" />
                            </div>
                            <div className='lg:hidden max-md:w-[20%] max-sm:w-[15%]'>
                                <img src={cloudLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-L flex items-center justify-between p-5 hidden md:flex">
                    <div className="flex items-center w-1/2 mx-auto max-md:hidden">
                        <MagnifyingGlass size={32} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="bg-transparent outline-none ml-2 border-2 shadow-3xl p-1 text-white w-full"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center space-x-2">
                            <div>
                                <UserCircle size={32} />
                            </div>
                            <div className="text-white">
                                José Paulo Andrade
                                <div className="text-sm text-white">Dev. FrontEnd</div>
                            </div>
                            <div className="text-white">
                                <Bell size={24} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-black rounded-tl-3xl   border-2 border-t-ORANGE border-l-ORANGE border-r-0 border-b-0 max-sm:border-0 rounded-none ">
                    {children}
                </div>
            </div>
        </div>
    );
}

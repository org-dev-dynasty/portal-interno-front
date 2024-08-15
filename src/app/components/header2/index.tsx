import { Gauge, BookOpen, PaintBrushBroad, Gear, ListChecks, Users, SignOut, Bell, MagnifyingGlass, UserCircle } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../../assets/logo.png"

export default function DashboardLayout({children}: any) {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: <Gauge size={24} />, path: '/portalInterno/home' },
        { name: 'Projetos', icon: <BookOpen size={24} />, path: '/portalInterno/projects' },
        { name: 'Design', icon: <PaintBrushBroad size={24} />, path: '/portalInterno/design' },
        { name: 'APIs', icon: <Gear size={24} />, path: '/portalInterno/apis' },
        { name: 'Tasks', icon: <ListChecks size={24} />, path: '/portalInterno/tasks' },
        { name: 'Membros', icon: <Users size={24} />, path: '/portalInterno/members' },
    ];

    return (
        <div className="flex h-screen bg-[#111111] text-gray-300">
        {/* Menu Lateral */}
        <div className="bg-gradient-to-R w-60 p-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-3 mb-8">
                <div className="flex items-center space-x-2">
                    <div className="text-ORANGE">
                        {/* Insira aqui o logo da DevDynasty */}
                        <img src={Logo} alt="" />
                    </div>

                </div>
            </div>
            {menuItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center p-2 rounded-md transition-colors 
                ${location.pathname === item.path ? ' text-white' : 'hover:bg-ORANGE hover:text-white'}`}
                >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                </Link>
            ))}
            <div className="">
                <Link to="/logout" className="flex items-center p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors">
                    <SignOut size={24} className="mr-3" />
                    Sair da Conta
                </Link>
            </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex-1 flex flex-col">
            <div className="bg-gradient-to-L flex items-center justify-between p-5">
                <div className="flex items-center w-1/2 mx-auto">
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
            <div className="flex-1 bg-black rounded-tl-3xl border-2 border-t-ORANGE border-l-ORANGE border-r-0 border-b-0 ">
                {children}
            </div>
        </div>
    </div>
    );
}

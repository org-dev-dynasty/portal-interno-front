import { GridFour, ListDashes, Plus } from "@phosphor-icons/react";
import Header from "../../../components/header";
import ProjectCard from "../../../components/projectCard";
import "./styles.css";



export function Projects() {
    return ( 
        <>
            <Header/>
            <main className="bg-black h-[91.2vh]">
                <div className={`flex content-center space-x-[78%] px-10 pt-6  justify-between w-full`}>
                    <h1 className="text-white font-thin text-[64px] ">Projetos</h1>
                    <button className="flex rounded-lg w-16 h-16 bg-ORANGE mt-auto mb-auto right-4 justify-center items-center hover:bg-LIGHT_ORANGE duration-300"><Plus size={50} /></button>
                </div>
                <div className="grid my-2 ">
                    <hr className="w-[96%] justify-self-center" />
                </div>
                <div className="flex space-x-[20%] px-8 w-full justify-between">
                    <div className="flex space-x-[10%]">
                        <div className="flex items-center">
                            <p className="text-white font-thin text-[32px]">Todos</p>
                            <input id="checked-checkbox" type="checkbox" className="appearance-none w-8 h-8 bg-black border-white rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer" />
                        </div>
                        <div className="flex items-center">
                            <p className="text-white font-thin text-[32px]">Iniciados</p>
                            <input id="checked-checkbox" type="checkbox" className="appearance-none w-8 h-8 bg-gray-100 border-gray-300 rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer" />
                        </div>
                        <div className="flex items-center">
                            <p className="text-white font-thin text-[32px]">Finalizados</p>
                            <input id="checked-checkbox" type="checkbox" className="appearance-none w-8 h-8 bg-gray-100 border-gray-300 rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex w-8 h-8 bg-black border-2 border-ORANGE rounded-sm hover:cursor-pointer hover:border-LIGHT_ORANGE mr-4 justify-center items-center duration-150"><GridFour size={26} color="white" /></div>
                        <div className="flex w-8 h-8 bg-black border-2 border-ORANGE rounded-sm hover:cursor-pointer hover:border-LIGHT_ORANGE justify-center items-center duration-150"><ListDashes size={26} color="white"/></div>
                    </div>
                </div>
                <div className="h-10 w-full bg-transparent rounded-b-3xl border-x-2 border-b-2" />
                <div className="relative justify-start h-[70%] overflow-y-auto p-6">
                    <div className="custom-scrollbar h-full w-full">
                        <ProjectCard />
                    </div>
                </div>
            </main>
        </>
    )
}

// peer row-start-1 col-start-1 appearance-none w-4 h-4 border ring-transparent border-slate-300 rounded dark:border-slate-600 checked:bg-violet-600 checked:border-violet-600 dark:checked:border-violet-600 forced-colors:appearance-auto
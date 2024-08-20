import { GridFour, ListDashes, Plus } from "@phosphor-icons/react";
import ProjectCard from "../../../components/projectCard";
import DashboardLayout from "../../../components/header2";

export function Projects() {
  return (
    <>
      <DashboardLayout>
        <main className="bg-transparent h-[90vh]">
          <div
            className={`flex content-center px-10 pt-6  justify-between w-full `}
          >
            <h1 className="text-white font-thin text-4xl ">Projetos</h1>
            <button className="flex rounded-lg w-10 h-10 bg-ORANGE mt-auto mb-auto right-4 justify-center items-center hover:bg-LIGHT_ORANGE duration-300">
              <Plus size={24} color="white"/>
            </button>
          </div>
          <div className="grid my-2 ">
            <hr className="w-[96%] justify-self-center" />
          </div>
          <div className="flex px-8 w-full justify-between border-white border-b-2 rounded-b-2xl pb-3  ">
            <div className="flex space-x-[10%]">
              <div className="flex items-center">
                <p className="text-white font-thin text-2xl">Todos</p>
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="appearance-none w-8 h-8 bg-black border-white rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer"
                />
              </div>
              <div className="flex items-center">
                <p className="text-white font-thin text-2xl">Iniciados</p>
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="appearance-none w-8 h-8 bg-gray-100 border-gray-300 rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer"
                />
              </div>
              <div className="flex items-center">
                <p className="text-white font-thin text-2xl">Finalizados</p>
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="appearance-none w-8 h-8 bg-gray-100 border-gray-300 rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex w-8 h-8 bg-black border-2 border-ORANGE rounded-sm hover:cursor-pointer hover:border-LIGHT_ORANGE mr-4 justify-center items-center duration-150">
                <GridFour size={26} color="white" />
              </div>
              <div className="flex w-8 h-8 bg-black border-2 border-ORANGE rounded-sm hover:cursor-pointer hover:border-LIGHT_ORANGE justify-center items-center duration-150">
                <ListDashes size={26} color="white" />
              </div>
            </div>
          </div>
          {/* <div className="relative flex h-12 w-full bg-gradient-to-t   from-white to-transparent rounded-b-3xl justify-center">
            <div className="absolute w-[99.7%] bottom-[0.1rem] h-10 bg-black rounded-b-3xl" />
          </div> */}
          <div className="relative justify-start h-[70%] overflow-y-auto p-6">
            <div className="custom-scrollbar h-full w-full">
              <ProjectCard />
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
}

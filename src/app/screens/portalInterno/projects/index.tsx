import { GridFour, ListDashes, Plus } from "@phosphor-icons/react";
import ProjectCard from "../../../components/projectCard";
import DashboardLayout from "../../../components/header2";
import CreateProjectModal from "../../../components/createProjectModal";
import { useState } from "react";

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col bg-transparent">
          <main className="bg-transparent ">
            <div
              className={`flex flex-row sm:flex-row content-center px-2 sm:px-10 pt-6 justify-between w-full `}
            >
              <h1 className="text-white font-thin text-3xl sm:text-4xl mb-4 sm:mb-0">
                Projetos
              </h1>
              <button
                className="flex rounded-lg w-10 h-10 bg-ORANGE mt-auto mb-auto sm:right-4 justify-center items-center hover:bg-LIGHT_ORANGE duration-300"
                onClick={openModal}
              >
                <Plus size={24} color="white" />
              </button>
            </div>
            <div className="grid my-2">
              <hr className="w-[96%] justify-self-center" />
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-8 w-full justify-between border-white border-b-2 rounded-b-2xl pb-3">
              <div className="flex flex-row sm:flex-row justify-between sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <p className="text-white font-thin text-sm sm:text-xl">
                    Todos
                  </p>
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    className="appearance-none w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 border-white rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer"
                  />
                </div>
                <div className="flex items-center">
                  <p className="text-white font-thin text-sm sm:text-xl">
                    Iniciados
                  </p>
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    className="appearance-none w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 border-gray-300 rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer"
                  />
                </div>
                <div className="flex items-center">
                  <p className="text-white font-thin text-sm sm:text-xl">
                    Finalizados
                  </p>
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    className="appearance-none w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 border-gray-300 rounded dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-white dark:border-2 ml-2 checked:bg-ORANGE checked:border-transparent hover:cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex justify-between  sm:space-x-4 mt-4 sm:mt-0 items-center">
                <div className="flex w-8 h-8 bg-black border-2 border-ORANGE rounded-sm hover:cursor-pointer hover:border-LIGHT_ORANGE justify-center items-center duration-150">
                  <GridFour size={26} color="white" />
                </div>
                <div className="flex w-8 h-8 bg-black border-2 border-ORANGE rounded-sm hover:cursor-pointer hover:border-LIGHT_ORANGE justify-center items-center duration-150">
                  <ListDashes size={26} color="white" />
                </div>
              </div>
            </div>
            <div className="h-[calc(100vh-220px)] w-full flex overflow-y-auto ">
              <div className="p-4 sm:p-6">
                <ProjectCard />
              </div>
            </div>
          </main>
        </div>

        {isModalOpen && <CreateProjectModal onClose={closeModal} />}
      </DashboardLayout>
    </>
  );
}

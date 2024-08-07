/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar } from "../../../components/navbar"
// import { NavBar2 } from "../../../components/navbar2"
import firstImage from "../../../../assets/firstImage.png"
import { Crosshair, Eye, House } from "@phosphor-icons/react"
import Swiper from "../../../components/carousel"
import LooperGroup from "../../../../assets/LooperGroup2.png"
import StarsCanvas from "../../../components/starbackground"


export function Home() {

    return (
        <>
            <Navbar />
            {/* <NavBar2 /> */}
            <main className="bg-BLACK bg-no-repeat h-full" style={{ backgroundImage: `url(${LooperGroup})` }}>
                <StarsCanvas />
                <section id="#sobre">
                    <p className="text-6xl text-center text-ORANGE">SOBRE NÓS</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <div className='flex mt-10 items-center justify-center gap-10 mx-20 max-sm:flex-col max-md:gap-5 max-md:mx-10'>
                        <button className="w-1/3 shadow-2xl border border-gray-300 rounded-lg p-2 hover:cursor-pointer duration-200 hover:scale-105 max-sm:w-[90%]">
                            <div className="relative">
                                <img src={firstImage} alt="firstImage" className="mx-auto self-center relative" />
                                <div className="flex flex-col items-center absolute -bottom-8 justify-center w-[100%]">
                                    <div className="bg-BACKGROUND-DARK p-2 rounded-full border-2 border-white duration-150 hover:scale-110">
                                        <Crosshair color="#F06B41" size={32} />
                                    </div>
                                </div>
                            </div>
                            <p className="text-ORANGE text-center text-3xl mt-10">Nossa Missão</p>
                            <div className="w-[90%] mx-auto">
                                <p className="text-white text-center text-xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!</p>
                            </div>
                        </button>
                        <button className="w-1/3 shadow-2xl border border-gray-300 rounded-lg p-2 hover:cursor-pointer duration-200 hover:scale-105 max-sm:w-[90%]">
                            <div className="relative">
                                <img src={firstImage} alt="firstImage" className="mx-auto self-center " />
                                <div className="flex flex-col items-center absolute -bottom-8 w-[100%] justify-center">
                                    <div className="bg-BACKGROUND-DARK p-2 rounded-full border-2 border-white duration-150 hover:scale-110">
                                        <House color="#F06B41" size={32} />
                                    </div>
                                </div>
                            </div>
                            <p className="text-ORANGE text-center text-3xl mt-10">Valores</p>
                            <div className="w-[90%] mx-auto">
                                <p className="text-white text-center text-xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!</p>
                            </div>
                        </button>
                        <button className="w-1/3 shadow-2xl border border-gray-300 rounded-lg p-2 hover:cursor-pointer duration-200 hover:scale-105 max-sm:w-[90%]">
                            <div className="relative">
                                <img src={firstImage} alt="firstImage" className="mx-auto self-center" />
                                <div className="flex flex-col items-center absolute -bottom-8 w-[100%] justify-center">
                                    <div className="bg-BACKGROUND-DARK p-2 rounded-full border-2 border-white duration-150 hover:scale-110">
                                        <Eye color="#F06B41" size={32} />
                                    </div>
                                </div>
                            </div>
                            <p className="text-ORANGE text-center text-3xl mt-10">Nossa Vizão</p>
                            <div className="w-[90%] mx-auto">
                                <p className="text-white text-center text-xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!</p>
                            </div>
                        </button>
                    </div>
                </section>
                <section className="mt-20 mb-20">
                    <p className="text-6xl text-center text-ORANGE">HABILIDADES</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>

                </section>
                <section className="mt-20 mb-20">
                    <p className="text-6xl text-center text-ORANGE">PROJETOS</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <Swiper />
                </section>
                <section>
                    <p className="text-6xl text-center text-ORANGE">EQUIPE</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <div>
                        <div className="flex justify-center mt-10">
                            <div className="w-1/5 bg-white rounded-full border-2 border-white shadow-2xl mx-5">

                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}


/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar } from "../../../components/navbar"
// import { NavBar2 } from "../../../components/navbar2"
import Swiper from "../../../components/carousel"
import Team from "../../../components/team"
import LooperGroup from "../../../../assets/LooperGroup2.png"
import StarsCanvas from "../../../components/starbackground"
import AboutCards from "../../../components/aboutCards"
import { GithubLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react"


export function Home() {


    return (
        <>
            <Navbar />
            <StarsCanvas />
            <main className="bg-black h-full" >
                <section id="sobre">
                    <p className="text-6xl text-center text-ORANGE">SOBRE NÓS</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <AboutCards />
                </section>
                <section id="habilidades" className="mt-20 mb-20">
                    <p className="text-6xl text-center text-ORANGE">HABILIDADES</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>

                </section>
                <section id="projetos" className="mt-20 mb-20">
                    <p className="text-6xl text-center text-ORANGE">PROJETOS</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <Swiper />
                </section>
                <section id="equipe">
                    <p className="text-6xl text-center text-ORANGE">EQUIPE</p>
                    <div className="flex mt-2 items-center justify-center">
                        <div className="w-16 h-0.5 bg-white"></div>
                        <div className="w-16 h-1 bg-ORANGE"></div>
                        <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-2xl text-center text-white mt-10 mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente sint possimus architecto maxime laborum voluptate quos, aperiam reprehenderit at quas fugiat iusto quo. Aliquid quisquam vitae quam accusantium tenetur?</p>
                    <Team />
                </section>
                <section>
                    <div className="flex w-full justify-center gap-20 pt-52">
                        <div>
                            <GithubLogo size={52} color="white" />
                        </div>
                        <div>
                            <LinkedinLogo size={52} color="white" />
                        </div>
                        <div >
                            <InstagramLogo size={52} color="white" />
                        </div>
                        <div>
                            <XLogo size={52} color="white" />
                        </div>
                    </div>
                    <div className="w-full text-center py-20">
                        <p className="text-white text-lg">© 2024 DevDynasty. Todos os direitos reservados.</p>
                    </div>
                </section>
            </main>


        </>
    )
}

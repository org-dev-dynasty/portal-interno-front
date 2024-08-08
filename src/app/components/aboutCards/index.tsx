import firstImage from "../../../assets/firstImage.png";
import { Crosshair, Eye, House } from "@phosphor-icons/react"

export default function AboutCards() {
    const cardsData = [
        {
            title: "Nossa Missão",
            image: firstImage, // substitua pelo caminho da imagem apropriada
            icon: <Crosshair color="#F06B41" size={32} />,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!",
        },
        {
            title: "Valores",
            image: firstImage, // substitua pelo caminho da imagem apropriada
            icon: <House color="#F06B41" size={32} />,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!",
        },
        {
            title: "Nossa Visão",
            image: firstImage, // substitua pelo caminho da imagem apropriada
            icon: <Eye color="#F06B41" size={32} />,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!",
        },
    ];

    return (
        <div className='flex mt-10 items-center justify-center gap-10 mx-32 max-sm:flex-col max-md:gap-5 max-md:mx-10'>
            {cardsData.map((card, index) => (
                <button className="w-1/3 shadow-2xl border border-gray-300 rounded-lg p-2 hover:cursor-pointer duration-200 hover:scale-105 max-sm:w-[90%]" key={index}>
                    <div className="relative">
                        <img src={card.image} alt="firstImage" className="mx-auto self-center relative" />
                        <div className="flex flex-col items-center absolute -bottom-8 justify-center w-[100%]">
                            <div className="bg-black p-2 rounded-full border-2 border-white duration-150 hover:scale-110">
                                {card.icon}
                            </div>
                        </div>
                    </div>
                    <p className="text-ORANGE text-center text-3xl mt-10">{card.title}</p>
                    <div className="w-[90%] mx-auto mb-2">
                        <p className="text-white text-center text-xl mt-3">{card.description}</p>
                    </div>
                </button>
            ))}
        </div>
    )
}
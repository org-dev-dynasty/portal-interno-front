
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import firstImage from "../../../assets/firstImage.png";
import cloudLogo from "../../../assets/cloudLogo.png";
import { useState } from 'react';

const products = [
    {
        id: 1,
        name: "Projeto 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!",
    },
    {
        id: 2,
        name: "Projeto 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!",
    },
    {
        id: 3,
        name: "Projeto 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem quas itaque minus, maxime libero iusto odio fugiat, modi temporibus dolorem nemo alias natus optio neque aliquid eaque facilis tempora!",
    },


]

export default function Swiper() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const labelStyle = {
        opacity: 0,
        transition: "opacity 0.3s ease",
        cursor: "pointer"
    }

    const productTemplate = (product: { id: number, name: string, description: string }) => {
        return (
            <>
                <div className='flex mt-10' >
                    <button className="w-[55%] mx-auto bg-C-BACKGROUND rounded-2xl m-2 text-center pt-5 px-3 shadow-md shadow-white hover:cursor-pointer duration-500 hover:scale-95" onMouseEnter={() => setActiveIndex(product.id)}
                        onMouseLeave={() => setActiveIndex(null)}>
                        <div className='relative'>
                            <img src={firstImage} alt={product.name} className="w-[100%] shadow-ORANGE shadow-md object-cover rounded-xl" />
                            <div className='absolute w-full h-full top-0 opacity-0 duration-500 hover:opacity-100 flex justify-center items-center bg-C-BACKGROUND bg-opacity-60 rounded-xl'>
                                <img src={cloudLogo} alt="Cloud Logo" className='h-20' />
                            </div>
                        </div>
                        <div className='my-5 mx-5'>
                            <p className="mb-1 text-2xl text-white">{product.name}</p>
                            <p className="mt-2 mb-2 text-xl text-white">{product.description}</p>
                            <label style={{ ...labelStyle, opacity: activeIndex === product.id ? 1 : 0 }} className="text-ORANGE font-semibold text-md">{`Ver mais >`}</label>
                        </div>
                    </button>
                </div>
            </>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} className='mx-20' />
        </div>
    )
}

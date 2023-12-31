import {Component} from "solid-js"
import "solid-slider/slider.css";
import { SliderProvider, Slider, createSlider,SliderButton } from "solid-slider";
import { IoChevronBack, IoChevronForward } from 'solid-icons/io'
import Boat from "../../assets/img/Gili.jpeg"
import Canoo from "../../assets/img/photo-1564633351631-e85bd59a91af.avif"
import MoreInfoModal from "../modal/MoreInfoModal";
import { useProjectModalContext } from "../../context/ModalContext";


const Packages:Component = () => {
    const {
        setModalState, 
        setModalTitleState, 
        setModalTextState 
    } = useProjectModalContext();
    const options = 
        { 
            loop: true,
            breakpoints: {
                "(min-width: 400px)": {
                slides: { perView: 1, spacing: 5 },
                },
                "(min-width: 700px)": {
                slides: { perView: 2, spacing: 10 },
                },
            },
            slides: { perView: 1 }, 
        }

        const handleModalState = (e: string) => {
            if(e === 'water'){
                setModalState(true);
                setModalTitleState('Water Sports Package');
                setModalTextState('water');
            }
            if(e === 'full'){
                setModalState(true);
                setModalTitleState('Full-Day Package');
                setModalTextState('full');
            }
        }

    return (
        <div class="w-full scroll-my-10 pt-12 pb-16" id="packages">
            <div class="sm:w-10/12 m-auto relative">
                <div class="full pb-12">
                    <h1 class="text-5xl sm:text-6xl font-bold text-center">
                        OUR PACKAGES
                    </h1>
                </div>
                <SliderProvider>
                    <div class="w-9/12 m-auto">
                        <Slider options={options}>
                            <div class="w-11/12 sm:w-full relative bg-white border rounded shadow-lg border-gray-300">
                                <div class="h-72 bg-gray-100 relative" style={{"background-image":`url(${Canoo})`, "background-size":"cover"}}>
                                    <div class=" left-3 top-3 rounded-full shadow text-center font-semibold w-32 py-1 bg-white absolute">
                                        IDR 1 000 000
                                    </div>
                                </div>
                                <div class="px-3 py-2 sm:min-h-48">
                                    <h3 class="font-semibold text-center">
                                        Water Sports
                                    </h3>
                                    <br />
                                    <p class="text-center text-sm">
                                        Transport to Pantai Sire from Gili Islands by private speed boat. 
                                    </p>
                                    <p class="text-center text-sm mb-10">
                                        Activities: Jet-skis, Banana Boat, Donut, Wake-boarding and Beach Volleyball
                                    </p>
                                    <br />
                                    <div class="w-full absolute bottom-2 flex justify-center">
                                        <button
                                            onClick={() => handleModalState('water')}
                                            class="buttonHome text-white text-sm h-9 w-28 rounded-full"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="w-11/12 sm:w-full relative bg-white border rounded shadow-lg border-gray-300">
                                <div class="h-72 relative bg-gray-100" style={{"background-image":`url(${Boat})`, "background-size":"cover"}}>
                                    <div class=" left-3 top-3 rounded-full font-semibold shadow w-32 py-1 text-center bg-white absolute">
                                        IDR 1 495 000
                                    </div>
                                </div>
                                <div class="px-3 py-2 sm:min-h-48">
                                    <h3 class="font-semibold text-center">
                                        Full-Day Tour  
                                    </h3>
                                    <br />
                                    <p class="text-center text-sm">
                                        Activities: Snorkeling at the Statue (Gili Meno), Snorkeling at Garden Fish (Gili Air), Water Sports (Pantai Sire), Lunch, 
                                        Snorkeling at Turtle Point (Gili Trawangan), Dinner (Gili Trawangan)
                                    </p>
                                    <br />
                                    <div class="w-full absolute bottom-2 flex justify-center">
                                        <button
                                            onClick={() => handleModalState('full')}
                                            class="buttonHome text-white text-sm h-9 w-28 rounded-full"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div class="absolute w-full top-96">
                        <SliderButton class="float-left text-gray-400 hover:text-sky-500 text-5xl" prev>
                            <IoChevronBack />
                        </SliderButton>
                        <SliderButton class="float-right text-gray-400 hover:text-sky-500 text-5xl" next>
                            <IoChevronForward />
                        </SliderButton>
                    </div>
                </ SliderProvider>
            </div>
        </div>
    )
}

export default Packages;
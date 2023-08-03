import { Component } from "solid-js";
import Backgroud from "../../assets/img/turtle-1050x722-1.jpg"
import Turtle from "../../assets/video/turtle_-_35427 (Original).mp4"
import { A } from "@solidjs/router";

const GeneralHero:Component = () => {
    const handleScroll = () => {
        window.scroll(0,600);
    }

    return (
        <div 
            class="w-full h-[86vh] sm:h-[80vh] relative bg-gray-100 overflow-hidden"
            id="home"
        >
            <video src={Turtle} autoplay muted playsinline loop class="back-video">
            </video>
            <div class="w-full h-full absolute z-20 top-0 flex">
                <div class="w-11/12 sm:w-7/12 m-auto">
                    <h1 class="opacity-80 text-center sm:text-left text-5xl sm:text-7xl font-extrabold text-white HeroText">
                        WELCOME TO 
                        <br />
                        INDO WATERSPORT
                    </h1>
                    <br />
                    <h3 class="text-2xl text-center sm:text-left font-semibold text-white">
                        FUN AND ADVENTURE FOR THE WHOLE FAMILY
                    </h3>
                    <br />
                    <div class="w-full flex justify-center sm:float-none sm:justify-start">
                        <A href="#about">
                            <div
                                class="border-2 flex text-white hover:text-black border-white hover:bg-white h-12 w-36 text-lg rounded-full">
                                <p class="m-auto">
                                    Get Started
                                </p>
                            </div>
                        </A>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralHero;
import { Component } from "solid-js";
import UnderConstruction from "../assets/img/pngimg.com - under_construction_PNG66 (1).png"
import { IoCloudDownloadOutline } from "solid-icons/io";
import ImageOne from "../assets/clientImg/1.png";
import ImageTwo from "../assets/clientImg/2.png";
import ImageThree from "../assets/clientImg/3.png";
import ImageFour from "../assets/clientImg/4.png";
import ImageFive from "../assets/clientImg/5.png";
import ImageSix from "../assets/clientImg/6.png";
import ImageSeven from "../assets/clientImg/7.png";
import ImageEight from "../assets/clientImg/8.png";

const Gallery:Component = () => {
    return (
        <div class="w-full py-10">
            <div class="w-full sm:w-10/12 mx-auto flex flex-wrap sm:flex-nowrap sm:gap-5 px-5">
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageOne})`,"background-size":"cover"}}>
                    <a href={ImageOne} download={ImageOne}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageTwo})`,"background-size":"cover"}}>
                    <a href={ImageTwo} download={ImageTwo}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageThree})`,"background-size":"cover"}}>
                    <a href={ImageThree} download={ImageThree}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageFour})`,"background-size":"cover"}}>
                    <a href={ImageFour} download={ImageFour}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
            </div>
            <div class="w-full sm:w-10/12 mx-auto flex flex-wrap sm:flex-nowrap sm:gap-5 px-5 pt-5">
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageFive})`,"background-size":"cover"}}>
                    <a href={ImageFive} download={ImageFive}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageSix})`,"background-size":"cover"}}>
                    <a href={ImageSix} download={ImageSix}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageSeven})`,"background-size":"cover"}}>
                    <a href={ImageSeven} download={ImageSeven}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
                <div class="w-1/4 bg-gray-100 h-64 relative" style={{'background-image':`url(${ImageEight})`,"background-size":"cover"}}>
                    <a href={ImageEight} download={ImageEight}>
                        <IoCloudDownloadOutline class="absolute top-5 right-5 text-xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
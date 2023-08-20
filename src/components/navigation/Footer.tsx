import { Component } from "solid-js";
import Logo from "../../assets/img/Indowatersports-Logo.png"
import Kwi from "../../assets/img/KWI White.png"
import MOANDCO from "../../assets/img/MO&CO (1).png"

const Footer: Component = () => {
    return (
        <>
            <div class="w-full py-2 bg-sky-500">
                <div class="w-9/12 text-white m-auto flex flex-wrap">
                    <div class="w-full flex sm:w-1/5">
                        <a href="#home">
                            <img 
                                src={Logo} 
                                alt="Indo Watersport logo" 
                                class=" sm:h-16 m-auto sm:m-0"
                            />
                        </a>
                    </div>
                    <div class="w-full sm:w-3/5 flex mt-5 sm:mt-0">
                        <ul class="pt-3 text-xl flex gap-4 mx-auto">
                            <li class="py-1">
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li>|</li>
                            <li class="py-1">
                                <a href="#about">
                                    About us
                                </a>
                            </li>
                            <li>|</li>
                            <li class="py-1">
                                <a href="#packages">
                                    Packages
                                </a>
                            </li>
                            <li>|</li>
                            <li class="py-1">
                                <a href="#why">
                                    Why us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/5 flex mt-5 sm:mt-0">
                        <div class="flex gap-3 m-auto items-center">
                            <img 
                                src={Kwi} 
                                alt="Kraft Works logo" 
                                class="h-12 sm:w-full"
                            />
                            <div class="border-r-[2.5px] border-white h-9 sm:h-10"></div>
                            <img
                                src={MOANDCO}
                                alt="Mo & Co logo"
                                class="h-10 sm:w-auto sm:h-11"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full py-2 bg-sky-600">
                <div class="px-2 sm:px-0 text-white text-sm w-11/12 sm:w-9/12 m-auto flex justify-between">
                    <div>
                        Indo Watersport &copy; 2023
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
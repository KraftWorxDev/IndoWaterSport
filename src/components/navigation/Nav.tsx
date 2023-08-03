import { Component, For, createSignal } from "solid-js";
import Logo from "../../assets/img/Indowatersports-Logo.png"
import {A} from "@solidjs/router"
import { IoClose, IoMenuOutline } from "solid-icons/io";

const Nav: Component = () => {
    const [toggleMobileMenu,setToggleMobileMenu] = createSignal(false)
    const Links = [
        {
            id: 1,
            name: 'Home',
            key: 'home'
        },
        {
            id: 2,
            name: 'About us',
            key: 'about'
        },
        {
            id: 3,
            name: 'Packages',
            key: 'packages'
        },
    ]

    const handleScroll = (e: string) => {
        if(e === 'home'){
            window.scroll(0,0);
        }
        if(e === 'about'){
            window.scroll(0,600);
        }
        if(e === 'packages'){
            window.scroll(0,1000);
        }
    }

    const handleMobileScroll = (e: string) => {
        if(e === 'home'){
            window.scroll(0,0);
            setToggleMobileMenu(false);
        }
        if(e === 'about'){
            window.scroll(0,650);
            setToggleMobileMenu(false);
        }
        if(e === 'packages'){
            window.scroll(0,1450);
            setToggleMobileMenu(false);
        }
    }

    return (
        <>
            <nav class="w-full sticky top-0 bg-white border-b z-40">
                <div class="px-3 sm:px-0 sm:w-10/12 flex justify-between m-auto py-1 items-center">
                    <div>
                        <img
                            class="h-12" 
                            src={Logo} alt="indowatersports logo" 
                        />
                    </div>
                    <div class="hidden sm:flex gap-20 text">
                        <For each={Links}>{
                            (l) => 
                                <button
                                    onClick={() => handleScroll(l.key)}
                                >
                                    <div class="link-s">
                                        {l.name}
                                    </div>
                                </button>
                        }</For>
                    </div>
                    <div class="flex items-center">
                        {toggleMobileMenu()
                            ?
                                <button
                                    onClick={() => setToggleMobileMenu(false)}
                                >
                                    <IoClose class="sm:hidden text-3xl" />
                                </button>
                            :
                                <button
                                    onClick={() => setToggleMobileMenu(true)}
                                >
                                    <IoMenuOutline class="sm:hidden text-3xl" />
                                </button>
                        }
                        <button
                            class="bg-black text-white hidden sm:block h-10 w-32 rounded-full"
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </nav>
            <div class={`${toggleMobileMenu() ? 'w-full' : 'w-0'} duration-300 overflow-hidden flex ease-in-out bg-sky-500 h-screen fixed top-0 left-0 z-30 sm:hidden`}>
                <div class="w-full m-auto text-center gap-14 flex text-white text-3xl font-semibold flex-wrap">
                    <button 
                        onClick={() => handleMobileScroll('home')}
                        class="w-full"
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => handleMobileScroll('about')}
                        class="w-full"
                    >
                        About us
                    </button>
                    <button 
                        onClick={() => handleMobileScroll('packages')}
                        class="w-full"
                    >
                        Packages
                    </button>
                    <button 
                        onClick={() => handleMobileScroll('contact')}
                        class="w-full"
                    >
                        Contact us
                    </button>
                </div>
            </div>
        </>
    )
}

export default Nav;
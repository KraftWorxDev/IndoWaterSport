import { Component, For, createSignal } from "solid-js";
import Logo from "../../assets/img/Indowatersports-Logo.png"
import {A} from "@solidjs/router"
import { IoClose, IoMenuOutline } from "solid-icons/io";
import MoreInfoModal from "../modal/MoreInfoModal";

const Nav: Component = () => {
    const [toggleMobileMenu,setToggleMobileMenu] = createSignal(false)
    const Links = [
        {
            id: 1,
            name: 'Home',
            keyId: '#home'
        },
        {
            id: 2,
            name: 'About us',
            keyId: '#about'
        },
        {
            id: 3,
            name: 'Packages',
            keyId: '#packages'
        },
        {
            id: 4,
            name: 'Why us',
            keyId: '#why'
        },
        {
            id: 5,
            name: 'Gallery',
            keyId: '/gallery'
        },
    ];

    return (
        <>
            <nav class="w-full bg-white sticky top-0 border-b z-40">
                <div class="px-3 lg:px-0 lg:w-10/12 flex justify-between m-auto py-1 items-center">
                    <div>
                        <a href="/#home">
                            <img
                                class="h-12" 
                                src={Logo} alt="indowatersports logo" 
                            />
                        </a>
                    </div>
                    <div class="hidden lg:flex gap-20 text">
                        <For each={Links}>{
                            (l) => 
                                <A
                                    href={l.keyId}
                                    // onClick={() => handleScroll(l.key)}
                                >
                                    <div class="link-s">
                                        {l.name}
                                    </div>
                                </A>
                        }</For>
                    </div>
                    <div class="flex items-center">
                        {toggleMobileMenu()
                            ?
                                <button
                                    onClick={() => setToggleMobileMenu(false)}
                                >
                                    <IoClose class="lg:hidden text-3xl" />
                                </button>
                            :
                                <button
                                    onClick={() => setToggleMobileMenu(true)}
                                >
                                    <IoMenuOutline class="lg:hidden text-3xl" />
                                </button>
                        }
                        <A
                            href="#contact"
                            >
                            <div
                                class=" text-white hidden lg:flex h-10 w-32 rounded-full buttonHome"
                            >
                                <p class="m-auto">
                                    Enquire Now
                                </p>
                            </div>
                        </A>
                    </div>
                </div>
            </nav>
            <div class={`${toggleMobileMenu() ? 'w-full' : 'w-0'} duration-300 overflow-hidden flex ease-in-out bg-sky-500 h-screen fixed top-0 left-0 z-30 lg:hidden`}>
                <div class="w-full m-auto text-center gap-14 flex text-white text-3xl font-semibold flex-wrap">
                    <A 
                        href="/#home"
                        class="w-full"
                        onClick={() => setToggleMobileMenu(false)}
                    >
                        Home
                    </A>
                    <A 
                        href="/#about"// onClick={() => handleMobileScroll('about')}
                        class="w-full"
                        onClick={() => setToggleMobileMenu(false)}
                    >
                        About us
                    </A>
                    <A 
                        href="/#packages"// onClick={() => handleMobileScroll('packages')}
                        class="w-full"
                        onClick={() => setToggleMobileMenu(false)}
                    >
                        Packages
                    </A>
                    <A 
                        href="/#why"// onClick={() => handleMobileScroll('packages')}
                        class="w-full"
                        onClick={() => setToggleMobileMenu(false)}
                    >
                        Why us
                    </A>
                    <A 
                        href="/gallery"// onClick={() => handleMobileScroll('packages')}
                        class="w-full"
                        onClick={() => setToggleMobileMenu(false)}
                    >
                        Gallery
                    </A>
                    <A 
                        href="/#contact"// onClick={() => handleMobileScroll('contact')}
                        class="w-full"
                        onClick={() => setToggleMobileMenu(false)}
                    >
                        Enquire Now
                    </A>
                </div>
            </div>
            <MoreInfoModal />
        </>
    )
}

export default Nav;
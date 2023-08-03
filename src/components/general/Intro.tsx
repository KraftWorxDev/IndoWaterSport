import { Component } from "solid-js";
import BanannaBoat from "../../assets/img/photo-1564633351631-e85bd59a91af.avif"

const Intro:Component = () => {
    return (
        <div class="w-full py-16 scroll-my-10" style={{"background-color":"#DFE7EA"}} id="about">
            <div class="sm:w-10/12 flex flex-wrap m-auto">
                <div class="w-full sm:w-1/3 px-3 sm:px-0 pb-10 sm:pb-0">
                    <img 
                        src={BanannaBoat} 
                        alt="people on banana boat"
                        class="rounded shadow-lg border-4 border-white"
                    />
                </div>
                <div class="w-full sm:w-2/3 px-10">
                    <h1 class="font-bold text-5xl sm:text-6xl">
                        WELCOME TO<br></br> INDO WATERSPORT
                    </h1>
                    <h2 class="py-5 font-semibold" style={{"color":"#9ba6aa"}}>
                        YOUR FRIENDLY NEIGHBOURHOOD WATERSPORT GUYS
                    </h2>
                    <p>
                    Where thrilling water sport activities and mesmerizing snorkelling encounters combine to create
                    unforgettable memories. Dive into crystal-clear waters, explore vibrant coral reefs, and embark
                    on an extraordinary journey through the Gili Islands enchanting marine wonders.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro;
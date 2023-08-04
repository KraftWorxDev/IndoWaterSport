import { Component } from "solid-js";
import UnderConstruction from "../assets/img/pngimg.com - under_construction_PNG66 (1).png"

const Gallery:Component = () => {
    return (
        <div class="w-full h-screen flex px-4">
            <div class="w-full sm:w-5/12 m-auto p-5 bg-white">
                <img 
                    src={UnderConstruction} 
                    class="h-32 m-auto"
                />
                <h1 class="text-2xl">
                    Coming soon...
                </h1>
                <p class="pt-3">
                    We apologize for the inconvinance and are hard at work.
                </p>
            </div>
        </div>
    )
}

export default Gallery;
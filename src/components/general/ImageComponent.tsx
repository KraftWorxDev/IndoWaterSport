import { Component, For } from "solid-js";
import { Slider, SliderProvider } from "solid-slider";
import "solid-slider/slider.css";
// import autoplay from "solid-slider/plugins/autoplay";

interface ImageComponentType {
    data: any,
}

const ImageComponent: Component<ImageComponentType> = ({data}) => {
    return (
        <SliderProvider>
            <Slider  options={{ loop: true }} >
                <For each={data}>{
                    (i) => <div>
                        <img src={i} />
                    </div> 
                }</For>
            </Slider>
        </SliderProvider>
    )
}

export default ImageComponent;
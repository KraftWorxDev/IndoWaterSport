import { Component } from "solid-js";

interface InnerHeroProps {
    url: any
}

const InnerHero:Component<InnerHeroProps> = ({url}) => {
    return (
        <div class="w-full h-72 bg-gray-100" style={{"background-image":`url(${url})`}}>

        </div>
    )
}

export default InnerHero;
import {Component} from "solid-js"
import GeneralHero from "../components/hero/GeneralHero";
import Intro from "../components/general/Intro";
import Packages from "../components/general/Packages";
import Why from "../components/general/Why";
import ContactForm from "../components/general/Contact"

const Home: Component = () => {
    return (
        <>
          <GeneralHero />
          <Intro />
          <Packages />
          <Why />
          <ContactForm />
        </>
    )
}

export default Home;
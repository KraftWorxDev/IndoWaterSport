import {Component} from "solid-js"
import Nav from "../components/navigation/Nav";
import Footer from "../components/navigation/Footer";

interface MainLayoutType {
    children: any
}

const MainLayout: Component<MainLayoutType> = ({children}) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;
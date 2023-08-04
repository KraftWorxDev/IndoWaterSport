import { IoClose } from "solid-icons/io";
import { useProjectModalContext } from "../../context/ModalContext";

const MoreInfoModal = () => {
    const {
        modalState, 
        setModalState,
        modalTextState,
        setModalTextState, 
        modalTitleState, 
        setModalTitleState,
    } = useProjectModalContext();
    
    const handleCloseModal = () => {
        setModalState(false);
        setModalTextState(''),
        setModalTitleState('')
    }

    return (
        <div class={`${modalState() ? 'flex' : 'hidden' }  fixed w-full z-50 h-screen bg-black top-0 left-0 bg-opacity-50`}>
            <div class="w-11/12 md:9/12 relative lg:w-7/12 m-auto p-5 bg-white rounded-sm">
                <button
                    onClick={handleCloseModal} 
                    class="absolute -right-3 -top-3 flex text-gray-500 h-6 w-6 rounded-full bg-gray-50 ">
                    <IoClose class="m-auto text-lg"/>
                </button>
                <h1 class="text-xl">
                    {modalTitleState()}
                </h1>
                <p>
                    {modalTextState()}
                </p>
            </div>
        </div>
    )
}

export default MoreInfoModal;
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
            <div class={`${modalState() ? 'opacity-100 duration-1000 ease-in-out' : 'opacity-0 duration-1000'} w-11/12 md:9/12 relative lg:w-7/12 m-auto p-5 bg-white rounded-sm`}>
                <button
                    onClick={handleCloseModal} 
                    class="absolute -right-3 -top-3 flex text-gray-500 h-6 w-6 rounded-full bg-gray-50 ">
                    <IoClose class="m-auto text-lg"/>
                </button>
                <h1 class="text-xl font-semibold">
                    {modalTitleState()}
                </h1>
                <br/>
                <p>
                    {modalTextState() === 'full' 
                        ?
                        <div>
                            <p>
                                The full day tour is the entire day departing Gili Trawangan at 8:30am and concluding at 9:00pm. 
                                Check-in 8am.   Patrons will enjoy 1 hour 30 min at each snorkelling point and 4 hours in Pantai Sire, entertained by water sport activities and beach volleyball. 
                            </p>
                            <br/>
                            <p>
                                Patrons shall be served a lunch on the beach in Pantai Sire which shall be on offer for 2 hours 30 minutes. 
                                On return to Gili Trawangan from snorkelling at Turtle Point and enjoying spectacular sunset view on the ocean.
                                Patrons shall be treated to a full dinner at Oceans 2 Restaurant , concluding 9:00pm.
                            </p>
                            <br/>
                            <p class="font-semibold">Time Schedule:</p>
                            <br/>
                            <ul class="list-disc pl-5">
                                <li>
                                    Check-in Opposite the Jungle Bar (Gili Trawangan) 8:30am 
                                </li>
                                <li>
                                    Snorkelling Statue (Gili Meno) 8:40-10:10   
                                </li>
                                <li>
                                    Snorkelling Garden Fish (Gili Air) 10:40-12:10 
                                </li>
                                <li>
                                    Water Sports and Lunch (Pantai Sire) 12:20-16:20 
                                </li>
                                <li>
                                    Snorkelling Turtle Point (Gili Trawangan) 4:50-18:20 
                                </li>
                                <li>
                                    Dinner at Ocean 2 Restaurant (Gili Trawangan) 6:30-21:00pm 
                                </li>
                            </ul>
                            <br/>
                            <p>
                                *The times above include traveling time between destinations 
                            </p>
                        </div>
                        : 
                        <div>
                            <p>
                                Experience the ultimate aquatic adventure with our Watersport 
                                Activity Package on the breathtaking island of Gili Trawangan.
                                 Dive into excitement as you glide over crystal-clear waters 
                                 on jet skis, bounce through waves on banana boats and donuts,
                                and ride the waves like a pro with exhilarating wake-boarding 
                                sessions. Get ready for an unforgettable day of thrills and 
                                splashes in the stunning surroundings of Gili Trawangan. 
                            </p>
                            <br/>
                            <p class="font-semibold">Time Schedule:</p>
                            <br/>
                            <div class="w-full flex flex-wrap">
                                <div class="w-1/2">
                                    <h2>
                                        Water Sport Slot 1 from 10:00 – 14:00
                                    </h2>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            Check-in Opposite the Jungle Bar – 09:30 
                                        </li>
                                        <li>
                                            Jet ski – 20 min per person  
                                        </li>
                                        <li>
                                            Donut – 15 minutes 
                                        </li>
                                        <li>
                                            Banana – 15 minutes 
                                        </li>
                                        <li>
                                            Wake Boarding – 10 minutes 
                                        </li>
                                        <li>
                                            Return at 14:00m 
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-1/2">
                                    <h2>
                                        Water Sport Slot 2 from 12:00 – 16:00
                                    </h2>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            Check-in Opposite the Jungle Bar – 11:30 
                                        </li>
                                        <li>
                                            Jet ski – 20 min per person  
                                        </li>
                                        <li>
                                            Donut – 15 minutes 
                                        </li>
                                        <li>
                                            Banana – 15 minutes 
                                        </li>
                                        <li>
                                            Wake Boarding – 10 minutes 
                                        </li>
                                        <li>
                                            Return at 16:00 
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-full text-center mt-5">
                                    Beach Volleyball Lunch available throughout tour
                                </div>
                            </div>
                            <br/>
                            <p>
                                *The times above include traveling time between destinations 
                            </p>
                        </div>
                    }
                </p>
            </div>
        </div>
    )
}

export default MoreInfoModal;
/* eslint-disable react-refresh/only-export-components */
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import MyModal from "../ShowModal";

// Header
function Header() {

    const [ShowModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const nevigateTo = useNavigate();

    const handleHome = () => {
        nevigateTo("/");
    }
    const handleAdd = () => {
        nevigateTo("/addProduct");
    }

    const handlesing = () => {
        // nevigateTo("/registerPage");
        setShowModal(true);
    }


    return (
        <header>
            <div className="wrapper d-flex flex-wrap justify-content-between w-100 p-3 item-center">
                <div> 
                    <div className='logo w-2 d-flex'>
                        {/* <a href="#">
                            <FontAwesomeIcon icon={faHouse} onClick={handleHome} />
                        </a>
                        <div className="vline"></div>
                        <a href="#">
                            <FontAwesomeIcon icon={faPlus} onClick={handleAdd} />
                        </a> */}
                        <div className="vline"></div>
                        <div className="text-white font-bold" onClick={handlesing}>Sing In</div>
                        {ShowModal && <MyModal closeModal={closeModal} />}
                        <div className="vline"></div>
                            
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

 export default React.memo(Header);

// import React, { useState } from 'react'
// import MyModal from './ShowModal';

// function Modal() {
//     const [ShowModal, setShowModal] = useState(false);

//     const closeModal = () => setShowModal(false);
//   return (
//     <>
//     <button onClick={() => setShowModal(true)}>Open Modal</button>
//     {ShowModal && <MyModal closeModal={closeModal} />}
//     </>
//   ); 
// };

// export default Modal
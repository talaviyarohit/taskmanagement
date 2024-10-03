import React from 'react'
import RegisterPage from './pages/RegisterPage';

const MyModal = ({closeModal}) => {

    return (
        <>
        <div className='modal-wrapper' onClick ={closeModal}></div>
        <div className='modal-container'>

        <div className='inner' >
           
           <RegisterPage onClick ={closeModal} />
        </div>
           
        </div>

        </>
    )
}

export default MyModal;

import React from 'react'
import s from './Modal.module.scss'

const Modal = ({ isModalOpen, onClose }) => {



  return (
    <>
    <div   className={`${s.modal} ${isModalOpen ? s.active : ''}`}>
        <div className={s.box}>
            <h2>Привет я твой папа</h2>
            <p>На колени на колени</p>
            <div onClick={onClose}>
            <button >Закрыть</button>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Modal
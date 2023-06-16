import React from 'react'
import Modal from './Modal'
import ModalPortal from './ModalPortal'
import { useModal } from '../hooks/useModal'
import { ModalHook } from '../ts/types/global_types';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1]:ModalHook = useModal(false); 
    const [isOpenModal2, openModal2, closeModal2]:ModalHook = useModal(false); 
    const [isOpenModal3, openModal3, closeModal3]:ModalHook = useModal(false);
    const [isOpenModalPortal, openModalPortal, closeModalPortal]: ModalHook = useModal(false); 

  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola, este es el contenido del modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Hola, este es el contenido del modal 2</p>
            <img src="https://placeimg.com/400/400/tech" alt="Tech" />
        </Modal>
        <button onClick={openModal3}>Modal 3</button>
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <h3>Modal 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dolorum quos molestiae repellat incidunt, consequatur maxime? 
                Odio vitae error aut, asperiores saepe adipisci voluptate explicabo 
                quibusdam, fugit, dolorem quae possimus voluptatem?</p>
            <img src="https://placeimg.com/400/400/nature" alt="Nature" />
        </Modal>
        <button onClick={openModalPortal}>Modal con portal</button>
        <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
            <h3>Modal con portales</h3>
            <p>Este es el contenido de una ventana modal que carga en otro nodo del DOM diferente
                donde carga nuestra aplicación de React, gracias a los portales.
            </p>
            <img src="https://placeimg.com/400/400/tech" alt="Tech" />
        </ModalPortal>
    </div>
  )
}

export default Modals
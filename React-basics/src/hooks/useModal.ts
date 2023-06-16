import React, {useState} from 'react';
import { ModalHook } from '../ts/types/global_types';

export const useModal = (initialValue: boolean = false): ModalHook => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue);

    const openModal = (e: React.MouseEvent<HTMLButtonElement>):void => setIsOpen(true);
    const closeModal = (e: React.MouseEvent<HTMLButtonElement>):void => setIsOpen(false);

    return [isOpen, openModal, closeModal];
}
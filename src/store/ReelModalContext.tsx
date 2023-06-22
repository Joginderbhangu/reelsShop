"use client"
import React, { createContext, useContext, useState } from 'react';


type Props = {
    children: React.ReactNode
}

interface ReelModalContextState {
    isOpen: boolean,
    isDisabled: boolean,
    setIsOpen: (boolean:boolean) => void,
    setIsDisabled : (boolean:boolean) => void
}

export const ReelModalState = createContext<ReelModalContextState>({ isOpen: false, setIsOpen: ()=> null, isDisabled: false, setIsDisabled: ()=>null })

export const useModal = () => useContext(ReelModalState);

const ReelModalContext = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    return (
        <ReelModalState.Provider value={{ isOpen, setIsOpen, isDisabled, setIsDisabled }}>
            {
                children
            }
        </ReelModalState.Provider>
    )
}

export default ReelModalContext
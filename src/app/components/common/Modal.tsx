"use client"

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
    children: React.ReactNode,
    isOpen: boolean,
    setModal: (boolean:boolean) => void,
    title?: string
}

export default function Modal ({ children, isOpen, setModal, title="This is modal title" }: Props) {

    useEffect(() => {
        const body = document.body;
        isOpen ? body.style.overflow = 'hidden' : ''
    })

    const closeHandler = () => {
        setModal(false);
        const body = document.body;
        body.style.overflow = 'auto'
    }

    const modal = (
        <div id="popup-modal" tabIndex={-1} className="fixed top-0 left-0 right-0 z-50 md:inset-0 max-h-full">
            <div className='absolute -z-10 bg-gray-950 bg-opacity-30 w-full h-full'></div>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='relative w-3/4 h-2/3 bg-white shadow-md'>
                    <div>
                        <div>
                            <p className='p-6 text-xl font-bold shadow'>
                                {
                                    title
                                }
                            </p>
                        </div>
                        <div>
                            <button type="button" onClick={closeHandler} className="absolute top-4 right-4 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                    <div className='p-6'>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </div>
    )

    // const element:HTMLElement =

    return (
        <>
            {
                isOpen ? createPortal(modal,  document.querySelector('#modal') as React.ReactNode) : ''
            }
        </>
    )
}

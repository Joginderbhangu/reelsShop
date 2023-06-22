"use client"
import { useReelBlocks } from '@/store/ReelBlocksContext'
import { REEl_BLOCKS_ADD } from '@/store/actions/ReelBlocksActions'
import React, { useEffect, useRef } from 'react'
import Modal from '../common/Modal'
import { useModal } from '@/store/ReelModalContext'

type Props = {
    state: ReelBlocks[]
}

const ReelBlockStateSetter = ({ state=[] }: Props) => {
    const { isOpen, setIsOpen } = useModal() 
    const isStateLoaded = useRef(false);

    const { blocks, dispatch } = useReelBlocks()

    useEffect(() => {
        if(!isStateLoaded.current && state.length > 0){
            dispatch({ type: REEl_BLOCKS_ADD, payload: state  })
            isStateLoaded.current = true
        }
    }, [state])

  return (
    <Modal isOpen={isOpen} setModal={setIsOpen} >
      dkfkdjfjk
    </Modal>
  )
}

export default ReelBlockStateSetter
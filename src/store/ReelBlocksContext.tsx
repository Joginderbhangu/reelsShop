'use client'
import React, { useContext, createContext, useReducer, Dispatch } from 'react';
import reelBlocksReducer, { ReelBlocksActionType } from './reducers/ReelBlocksReducer';

type Props = {
    children: React.ReactNode
}

type ReelBlocksContextState = {
    blocks: ReelBlocks[],
    dispatch: Dispatch<ReelBlocksActionType>
}

export const ReelBlocksState = createContext<ReelBlocksContextState>({blocks:[], dispatch: () => null})

export const useReelBlocks = () => useContext(ReelBlocksState)

export default function ReelBlocks({ children }: Props) {

    const [blocks, dispatch] = useReducer(reelBlocksReducer, []);

  return (
    <ReelBlocksState.Provider value={{ blocks, dispatch }}>
        {
            children
        }
    </ReelBlocksState.Provider>
  )
}
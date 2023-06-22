import React from 'react'
import { ReelBlock } from './ReelBlock'
import { fetchAllReelBlocks } from '@/app/services/reelBlocks'
import ReelBlockStateSetter from './ReelBlockStateSetter'

type Props = {}

const AllReelBlocks = async (props: Props) => {

  const ReelBlocks: ReelBlocks[] = await fetchAllReelBlocks()

  return (
    <div>
      <ReelBlockStateSetter state={ReelBlocks} />
      {
        ReelBlocks?.map(block => (
          <ReelBlock block={block} key={block.id} />
        ))
      }
    </div>
  )
}

export default AllReelBlocks
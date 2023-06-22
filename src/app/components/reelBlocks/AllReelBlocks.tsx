import React from 'react'
import { ReelBlock } from './ReelBlock'
import { fetchAllReelBlocks } from '@/app/services/reelBlocks'
import ReelBlockStateSetter from './ReelBlockStateSetter'
import { CommonLayout } from '../common/CommonLayout'

type Props = {}

const AllReelBlocks = async (props: Props) => {

  const ReelBlocks: ReelBlocks[] = await fetchAllReelBlocks();

  return (
    <CommonLayout>
      <div className='reelUp-shop-blocks'>
        <ReelBlockStateSetter state={ReelBlocks} />
        {
          ReelBlocks?.map(block => (
            <ReelBlock block={block} key={block.id} />
          ))
        }
      </div>
    </CommonLayout>
  )
}

export default AllReelBlocks
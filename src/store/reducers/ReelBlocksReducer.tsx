import { clone } from "@/utils/common";
import { ReelBlocksActions, REEl_BLOCKS_ADD } from "../actions/ReelBlocksActions";

export type ReelBlocksActionType = Action<ReelBlocksActions, ReelBlocks>;

export type CartContextDispatch = (value: ReelBlocksActionType) => void

export default function reelBlocksReducer(state: ReelBlocks[], action: ReelBlocksActionType) {
    switch(action.type) {
        case REEl_BLOCKS_ADD:
            const clonedState = clone(state);

            clonedState.push(action.payload)

            return clonedState

        default:
            return state
    }
}
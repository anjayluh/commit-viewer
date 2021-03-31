import {INote, INoteDetails} from "../../../modules/note/types";

export interface INoteState {
    loading: boolean
    data: INote[]
    noteDetails?:INoteDetails
}

const initialState: INoteState = {
    loading: false,
    data: [],
    noteDetails: undefined,
}


export const noteRequestConstants = {
    RequestsFetchAll:"RequestsFetchAll"

}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case noteRequestConstants.RequestsFetchAll: {
            return {...state, loading: false, data: action.payload}
        }

        default: {
            return state
        }
    }
}
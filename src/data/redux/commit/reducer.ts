import {ICommit, ICommitDetails} from "../../../modules/commit/types";

export interface ICommitState {
    loading: boolean
    data: ICommit[]
    commitDetails?: ICommitDetails
}

const initialState: ICommitState = {
    loading: false,
    data: [],
    commitDetails: undefined,
}


export const commitViewerRequestConstants = {
    RequestsFetchAll:"RequestsFetchAll"

}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case commitViewerRequestConstants.RequestsFetchAll: {
            return {...state, loading: false, data: action.payload}
        }

        default: {
            return state
        }
    }
}
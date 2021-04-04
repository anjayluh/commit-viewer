import {IRepository, IRepositoryDetails, ICommit} from "../../../modules/repository/types";

export interface IRepositoryState {
    loading: boolean,
    searchLoading: boolean,
    data: IRepository[],
    repositoryDetails: IRepositoryDetails | null,
    searchParam: String | null,
    commits: ICommit[] | null
}

const initialState: IRepositoryState = {
    loading: false,
    searchLoading: false,
    data: [],
    repositoryDetails: null,
    searchParam: null,
    commits: null
}


export const RepositoryRequestConstants = {
    RequestsFetchAll:"RequestsFetchAll",
    FetchAllLoading: "FetchAllLoading",
    SearchRepositories: 'SearchRepositories',
    SearchResultsLoading: 'SearchResultsLoading',
    RepositoryFetchDetails: 'RepositoryFetchDetails',
    FetchCommits: 'FetchCommits'

}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case RepositoryRequestConstants.RequestsFetchAll: {
            return {...state, loading: false, data: action.payload}
        }

        case RepositoryRequestConstants.FetchAllLoading: {
            return {...state, loading: action.payload}
        }

        case RepositoryRequestConstants.SearchRepositories: {
            return {...state, searchParam: action.payload}
        }

        case RepositoryRequestConstants.SearchResultsLoading: {
            return {...state, searchLoading: action.payload}
        }

        case RepositoryRequestConstants.RepositoryFetchDetails: {
            return {...state, repositoryDetails: action.payload}
        }

        case RepositoryRequestConstants.FetchCommits: {
            return {...state, commits: action.payload}
        }

        default: {
            return state
        }
    }
}
import { IRepositoryState } from "./redux/repository/reducer";

export interface IState {
  repository: IRepositoryState;
  searchParam: String;
}

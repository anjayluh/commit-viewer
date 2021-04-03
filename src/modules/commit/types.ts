import { ICommitState } from "../../data/redux/commit/reducer";
export interface ICommit {
  id: String;
  createdAt: Date;
  avatar: String | null;
  author: String;
  message: String;
}

export interface ICommitDetails {
  id: String;
  createdAt: Date;
  avatar: String | null;
  author: String;
  message: String;
}
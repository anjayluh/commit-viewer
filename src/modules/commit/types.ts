import { ICommitState } from "../../data/redux/commit/reducer";
export interface ICommit {
  id: string;
  createdAt: Date;
  title: String;
  avatar: String;
  author: String;
  message: String;
}

export interface ICommitDetails {
  id: string;
  createdAt: Date;
  title: String;
  avatar: String;
  author: String;
  message: String;
}
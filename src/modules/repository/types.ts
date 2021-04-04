import { IRepositoryState } from "../../data/redux/repository/reducer";
export interface IRepository {
  id: String;
  createdAt: Date;
  avatar: String | null;
  name: String;
  message: String;
}

export interface IRepositoryDetails {
  id: String;
  createdAt: Date;
  avatar: String | null;
  name: String;
  message: String;
}

export interface ICommit {
    url: String,
    sha: String,
    node_id: String,
    html_url: String,
    comments_url: String,
    commit: any,
    author: any,
    committer: any,
    parents: any
  }
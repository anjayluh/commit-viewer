import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../data/types";
import Loader from "../../components/Loader";
import NoData from "../../components/NoData";
import DetailsCard from "../../components/DetailsCard";
import Button from "../../components/styled-components/Button";
import TextField from "../../components/styled-components/TextField";
import Paragraph from "../../components/styled-components/Paragraph";
import Header from "../../components/Header";
import {get} from "../../utils/ajax";
import { remoteRoutes } from "../../data/constants";
import { RepositoryRequestConstants} from "../../data/redux/repository/reducer";
import { ToastProvider, useToasts } from 'react-toast-notifications';
import snackbarMessages from "../../data/snackbarMessages";
import { useHistory } from "react-router-dom";

const styles = {
  main: {
    marginBottom: '120px'
  },
  searchContainer: {
    display: 'flex',
    width: '60%',
    marginTop: '-10px'
    
  },
  textField: {
    width: 694,
    height: 58,
    left: 240,
    top: 474
  },
  buttonContainer: {
    marginLeft: '15px'
  },
  header: {
    height: '130px',
    backgroundColor: '#EFF2F6'
  },
  searchText: {
      fontSize: '28px',
      lineHeight: '34px',
      margin: '25px 0px 20px 0px'
  }
}

const RepositoryDetails = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const history = useHistory();
  const {repositoryDetails, searchLoading, searchParam, commits} = useSelector((state: IState) => state.repository);

  useEffect(() => {
    searchLoading && !repositoryDetails && get(
      remoteRoutes.trendingRepos + `?q=name:${searchParam}`, // Get trending by stars
      (resp) => {
        // Get first item in response
        dispatch({
          type: RepositoryRequestConstants.RepositoryFetchDetails,
          payload: resp.items[0],
        });
        resp.items.length > 0 && fetchCommits(resp.items[0]);
      },
      (error) => {
        error && error.message ? addToast(JSON.parse(error.message).message, {
          appearance: 'error',
          autoDismiss: true,
        })
        :addToast(snackbarMessages.default.fail, {
          appearance: 'error',
          autoDismiss: true,
        });
        dispatch({
          type: RepositoryRequestConstants.SearchResultsLoading,
          payload: false,
        });
      },
      () => {
        !repositoryDetails && // Turn off loader
        dispatch({
          type: RepositoryRequestConstants.SearchResultsLoading,
          payload: false,
        });
      }
    );
    
    searchLoading && repositoryDetails && fetchCommits(repositoryDetails);

  }, [dispatch])

  const fetchCommits = (repo: any) => {
    get(
      remoteRoutes.commitHistory + `${repo.owner.login}/${repo.name}/commits`,
      (resp) => {
        dispatch({
          type: RepositoryRequestConstants.FetchCommits,
          payload: resp,
        });
        history.push(`/details`);
      },
      (error) => {
        error && error.message ? addToast(JSON.parse(error.message).message, {
          appearance: 'error',
          autoDismiss: true,
        })
        :addToast(snackbarMessages.default.fail, {
          appearance: 'error',
          autoDismiss: true,
        });
      },
      () => {
        dispatch({
          type: RepositoryRequestConstants.SearchResultsLoading,
          payload: false,
        });
      }
    )
  }
  const filter = (searchParam: String) => {
    dispatch({
      type: RepositoryRequestConstants.SearchResultsLoading,
      payload: true,
    });
    get(
      remoteRoutes.trendingRepos + `?q=name:${searchParam}`, // Get trending by stars
      (resp) => {
        // Get first item in response
        dispatch({
          type: RepositoryRequestConstants.RepositoryFetchDetails,
          payload: resp.items[0],
        });
        fetchCommits(resp.items[0]);
      },
      (error) => {
        error && error.message ? addToast(JSON.parse(error.message).message, {
          appearance: 'error',
          autoDismiss: true,
        })
        :addToast(snackbarMessages.default.fail, {
          appearance: 'error',
          autoDismiss: true,
        });
        dispatch({
          type: RepositoryRequestConstants.SearchResultsLoading,
          payload: false,
        });
      },
      () => {
        // Turn off loader
        dispatch({
          type: RepositoryRequestConstants.SearchResultsLoading,
          payload: false,
        });
      }
    );
  }
  const placeHolder: string = searchParam ? `${searchParam}` : '';
  
  return (
    <div>
      <main>
          <Header customStyles={styles.header}>
            <div style={styles.searchContainer}>
              <TextField placeHolder={placeHolder} type={'text'} iconClass={"fa fa-search icon"}
              containerStyles={styles.textField} />
              <span style={styles.buttonContainer}>
                <Button handleClick={filter} params={searchParam}>
                  See commits 🚀
                </Button>
              </span>
            </div>
          </Header>
          <Paragraph className={`normal dark extra-bold`} customStyle={styles.searchText} >
            {searchParam}
          </Paragraph>
          {searchLoading &&
            <Loader />
          }
          {!searchLoading && repositoryDetails && commits &&(
            commits?.map((item, index) => (
            item.author && index < 10 && 
            <DetailsCard key={index} avatar={item.author.avatar_url} author={item.author.login} description={item.commit.message}
            createdAt={item.commit.author.date} />
            ))
            )
          }
          {!searchLoading && !repositoryDetails &&
            <NoData />
          }
        </main>
    </div>
  );
};

export default RepositoryDetails;

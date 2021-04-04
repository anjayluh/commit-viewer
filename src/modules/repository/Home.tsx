import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../data/types";
import Chip from "../../components/styled-components/Chip";
import Button from "../../components/styled-components/Button";
import TextField from "../../components/styled-components/TextField";
import HeadingOne from "../../components/styled-components/HeadingOne";
import Paragraph from "../../components/styled-components/Paragraph";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import {get} from "../../utils/ajax";
import { localRoutes, remoteRoutes } from "../../data/constants";
import { RepositoryRequestConstants} from "../../data/redux/repository/reducer";
import { ToastProvider, useToasts } from 'react-toast-notifications';
import snackbarMessages from "../../data/snackbarMessages";
import { useHistory } from "react-router-dom";

const styles = {
  main: {
    marginBottom: '120px'
  },
  description: {
    width: '440px',
    margin: '17px auto 0px'
  },
  searchContainer: {
    display: 'flex',
    width: '60%',
    margin: '69px auto 24px',
    
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
  alternativeText: {
    marginBottom: '24px'
  },
  footer: {
    textAlign: "center" as "center",
    margin: '0px auto'
  },
  chip: {
    marginRight: '32px'
  }
}

const Home = () => {
  const dispatch = useDispatch();
  const {data, searchParam} = useSelector((state: IState) => state.repository);
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    get(
      remoteRoutes.trendingRepos + `?q=sort:stars ${Math.pow(1000, 5)}&per_page=10&page=1`, // Get trending by stars
      (resp) => {
        // Sort out repos with long names
        let items = resp.items.filter((item: any) => item.name.length < 25);
        dispatch({
          type: RepositoryRequestConstants.RequestsFetchAll,
          payload: [...items],
        });
      },
      (error) => {
        error && error && error.message  ? addToast(JSON.parse(error.message).message, {
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
          type: RepositoryRequestConstants.FetchAllLoading,
          payload: false,
        });
      }
    );
  }, [dispatch])

  const filter = (searchParam: String) => {
    dispatch({
      type: RepositoryRequestConstants.SearchResultsLoading,
      payload: true,
    });
    dispatch({
      type: RepositoryRequestConstants.SearchRepositories,
      payload: searchParam,
    });
    history.push(`/details`);
  }

  const selectChip = (item: any) => {
    dispatch({
      type: RepositoryRequestConstants.SearchResultsLoading,
      payload: true,
    });
    history.push(`/details`);
    dispatch({
      type: RepositoryRequestConstants.SearchRepositories,
      payload: item.name,
    });
    dispatch({
      type: RepositoryRequestConstants.RepositoryFetchDetails,
      payload: item,
    });
  }

  return (
    <div>
      <Header>
        <Navigation></Navigation>
      </Header>
      <main style={styles.main}>
        <HeadingOne>
          Discover the world of code
        </HeadingOne>
        <Paragraph className={`normal dark`} customStyle={styles.description}>
          Explore open source projects, and read their commit history to see how they were built
        </Paragraph>
        <div style={styles.searchContainer}>
          <TextField placeHolder={'Eg. facebook/react'} type={'text'} iconClass={"fa fa-search icon"}
          containerStyles={styles.textField} />
          <span style={styles.buttonContainer}>
            <Button handleClick={filter} params={searchParam}>
              See commits 🚀
            </Button>
          </span>
        </div>
        { data.length > 0 &&
          <Paragraph className={`normal dark small`} customStyle={styles.alternativeText}>
            Or pick one of these suggested repos
          </Paragraph>
        }
        <div style={styles.footer}>
          {data.map((item, index) => (
            // Display first 4 items
            index < 5 && <Chip key={index} customStyle={styles.chip} handleClick={selectChip} item={item}>
              {item.name}
            </ Chip>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

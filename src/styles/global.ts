import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

header.details-header {
  padding: 35px 150px;
  height: unset!important;
}
header.details-header .right {
  width: 82%;
}
header.details-header .left p {
  margin-top: 12px
}
  @media screen and (max-width: 765px) {
    header.details-header{
      padding: 25px 20%!important;
      height: unset!important;
    }
    header.details-header .left {
      margin-right: auto;
      margin-left: auto;
    }
    header.details-header .right {
      display: none!important;
    }
    div#root>div>header {
      display: block!important;
      padding: 23px 20% 0px!important;
    }
    div#root>div>header .right {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
    header.details-header .left p {
      margin-top: unset;
  }
    main {
      margin-bottom: unset!important;
    }
    main h1 {
      font-size: 56px!important;
      line-height: 62px!important;
      letter-spacing: -2.4px!important;
      height: unset!important;
      margin: 22px auto 25px!important;
      letter-spacing: -2.4px!important;
    }
    ul {
      padding-top: 0px;
      padding-inline-start: 0px;
      justify-content: center;
      margin-top: 11px!important;
    }
    ul li {
      width: unset!important;
      margin: 0px 15px!important;
    }
    header>div>div>p {
      margin-left: auto!important;
      margin-right: auto!important;
    }
    .chip-container {
      flex-direction: column;
      margin-bottom: 40px;
    }
    .chip-container>div {
      width: fit-content;
      margin-right: auto!important;
      margin-left:  auto!important;
    }
    .search-container {
      flex-direction: column;
      margin: 62px auto 24px!important;
    }
    .search-container>div {
      width: 100%!important;
      margin-right: unset!important;
      margin-left: unset!important;
    }
    .search-container i {
      left: 3%!important;
    }
    .search-container>div>input {
      padding-left: unset!important;
    }
    .search-container>div>button {
      width: 100%!important;
      margin-top: 24px;
    }
    .home-search.search-container div input {
      padding-left: 10%!important;
      width: 90%!important;
    }
    main h1 {
      margin-bottom: 24px;
      display: inline-block;
      font-size: 56px;
      line-height: 62px;
      text-align: center;
      letter-spacing: -2.4px;
    }
    main h1, main p.description {
      width: unset!important;
      padding-left: 32px;
      padding-right: 32px;
      margin: 0px auto 64px!important;
    }
    .details-card-container {
      margin: 0px auto!important;
      padding: 15px 30px!important;
      flex-wrap: wrap;
    }
    .details-card-container .center {
      order: 1;
      flex: 0 0 100%!important;
      margin-bottom: 18px;
    }
    .details-card-container .left {
      order: 2;
      flex-direction: row;
      display: flex;
    }
    .details-card-container .right {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .details-card-container p:not(.author) {
      margin: unset!important;
    }
    .details-card-container p.author {
      margin: -2px!important;
    }
    .details-card-container p:not(.author) {
      letter-spacing: -0.4px!important;
    }
    .details-card-container .avatar-container {
      width: 26px;
      min-width: 26px;
      height: 26px;
      border-radius: 50%;
      margin: 0px 15px 0px 0px!important;
    }
    .details-card-container .avatar-container picture {
      margin-top: -6px;
      display: block;
    }
  }
}
`;
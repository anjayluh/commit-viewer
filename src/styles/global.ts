import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
  @media screen and (max-width: 765px) {
    div#root>div>header{
      display: block!important;
      padding: 22px 131px 16px;
    }
    ul {
      display: inline-flex;
      padding-top: 0px;
      padding-inline-start: 0px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5px;
      width: 180px;
    }
    header>div>div>p {
      margin-left: auto!important;
      margin-right: auto!important;
    }
    .chip-container {
      flex-direction: column;
      margin-bottom: 40px;
    }
    .chip-container>div{
      width: fit-content;
      margin-right: auto!important;
      margin-left:  auto!important;
    }
    .search-container{
      flex-direction: column;
      margin: 64px auto 24px!important;
    }
    .search-container>div{
      width: 100%!important;
      margin-right: unset!important;
      margin-left: unset!important;
    }
    .search-container>div>input{
      padding-left: unset!important;
    }
    .search-container>div>button{
      width: 100%!important;
      margin-top: 24px;
    }
    main h1 {
      margin-bottom: 24px;
    display: inline-block;
    font-size: 56px;
    line-height: 62px;
    text-align: center;
    letter-spacing: -2.4px;
    }
    main h1, main p.description{
      width: unset!important;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
}
`;
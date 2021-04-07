import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

header.details-header{
  padding: 35px 150px!important;
  height: unset!important;
}
  @media screen and (max-width: 765px) {
    header.details-header{
      padding: 35px 150px!important;
      height: unset!important;
    }
    header.details-header .left{
      margin-right: auto;
    margin-left: auto;
    }
    header.details-header .right{
      display: none!important;
    }
    div#root>div>header{
      display: block!important;
      padding: 23px 150px 0px!important;
    }
    div#root>div>header.details-header p.logo{
      margin-top: 11px!important;
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
      margin: 62px auto 24px!important;
    }
    .search-container>div{
      width: 100%!important;
      margin-right: unset!important;
      margin-left: unset!important;
    }
    .search-container>div>input{
      padding-left: unset!important;
    }
    .search-container>div>input::placeholder{
      padding-left: 45px!important;
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
      margin: 0px auto 64px!important;
    }
  }
}
`;
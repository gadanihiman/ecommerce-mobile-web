import { createGlobalStyle } from 'styled-components';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    /* display: block; */
  }
  body {
    font-family: -apple-system,Helvetica Neue,Helvetica,Roboto,Droid Sans,Arial,sans-serif;
    font-weight: 400;
    font-size: .875rem;
    color: rgba(0,0,0,.87);
    /* background: #efefef; */
  }
`;

export default GlobalStyle;

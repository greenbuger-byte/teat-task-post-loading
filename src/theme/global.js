import { createGlobalStyle} from "styled-components";

import * as colors from "./colors";

export const global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
  }
  /**
    NORMALIZE
  **/
  html {
    text-rendering: optimizeLegibility;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
    text-size-adjust: 100%;
  }
  body {
    background-color: ${colors.background};
  }
  /**
    TITLE 
  **/
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
  }
  /**
    masonry
   **/

  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -0.5rem;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 0rem;
    background-clip: padding-box;
  }
  .my-masonry-grid_column > div { 
  margin-bottom: 2rem;
}
`;
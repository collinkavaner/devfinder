import { createGlobalStyle } from 'styled-components';
import "@fontsource/space-mono"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Space Mono', monospace;
        line-height: 25px;
        font-size: 0.938rem; // 15px
        font-weight: 400;
        min-height: 100vh;
        background: #141D2F;
        color: #fff;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }

    button {
        cursor: pointer;
        padding: 10px 15px;
        background-color: #0079FF;
        color: #fff;
        border: none;
        border-radius: 10px;
        font-weight: bold;
    }

    button:hover {
        background-color: #60ABFF;
    }

    h1 {
        font-size: 1.625rem; // 26px
        font-weight: 700;
        line-height: 38px;
    }

    h2 {
        font-size: 1.375rem; // 22px
        font-weight: 700;
        line-height: 33px;
    }

    h3 {
        font-size: 1rem; // 16px
        font-weight: 400;
        line-height: 24px;
    }

    h4 {
        font-size: 0.813rem; // 13px
        font-weight: 400;
        line-height: 20px;        
    }

`;

export default GlobalStyle;
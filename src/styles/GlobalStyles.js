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
        background: ${({ theme }) => theme.bgPrimary};
        color: ${({ theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
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

    a {
        color: #0079FF;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        height: 100%;
        padding: 10px 15px;
        background-color: #0079FF;
        color: #fff;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1rem; // 16px
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

    p {
        font-size: 0.938rem; // 15px
        font-weight: 400;
        line-height: 25px;
    }

    .not-available {
        color: #8B949E;
        fill: #8B949E;
    }

    .toggle-theme {
        color: ${({ theme }) => theme.text};
        transition: color 0.2s ease-in;
    }

    .toggle-theme:hover {
        background-color: ${({ theme }) => theme.bgSecondary};
        box-shadow: ${({ theme }) => theme.dropShadow};
        transition: background 0.2s ease-in, box-shadow 0.2s ease-in;
    }


    @media screen and (max-width: 767px) {

        h1 {
            font-size: 1rem; // 16px
            font-weight: 700;
            line-height: 26px;
        }

        h2 {
            font-size: 1rem; // 16px
            font-weight: 700;
            line-height: 22px;
        }

        h4 {
            font-size: 0.688rem; // 11px
            font-weight: 400;
            line-height: 21px;        
        }

        p {
            font-size: 0.813rem; // 13px
            font-weight: 400;
            line-height: 21px;
        }

        button {
            font-size: 0.875rem; // 14px
        }

    }

`;

export default GlobalStyle;
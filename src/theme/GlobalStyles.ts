import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body, html {
        font-family: 'Noto Serif JP', serif;
        height: 100%;
    }

    *, *::after, *::before {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Noto Serif JP', serif;
    }
`;

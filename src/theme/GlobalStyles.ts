import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body, html {
        font-family: 'Lato', sans-serif;
        height: 100%;
        width:100%;
        margin:0;
        padding:0;
        overflow-x:hidden;
    }

    *, *::after, *::before {
        margin:0;
        padding:0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *:focus {
        outline: none;
    }
    
    button,textarea{
        font-family: 'Lato', sans-serif;
    }

    ul{
        list-style-type:none;
    }

    a{
        text-decoration:none;
    }

`;

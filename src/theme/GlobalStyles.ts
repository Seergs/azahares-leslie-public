import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body, html {
        font-family: 'Lora', serif;
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
    }
    
    button,textarea{
        font-family: 'Lora', serif;
    }

    ul{
        list-style-type:none;
    }

    a{
        text-decoration:none;
    }
`;

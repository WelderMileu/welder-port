import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-white: #ffffff;
        --color-gray-light: #838383;
        --color-gray-smlight: #CCCCCC;
        --color-green-light: #50838E; 
    }

    *,
    html,
    #root {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }
`
import { createGlobalStyle } from 'styled-components'
import { Theme } from '@types'

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`
    body, html {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
    }
    h1, h2, h3, p {
        margin: 0;
        padding: 0;
    }
`

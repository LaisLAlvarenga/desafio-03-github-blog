import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};
    }
`
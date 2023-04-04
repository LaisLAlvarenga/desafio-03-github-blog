import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px #3294F8;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`
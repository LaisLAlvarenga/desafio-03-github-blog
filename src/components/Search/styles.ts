import styled from 'styled-components'

export const SearchContainer = styled.div`
    max-width: 864px; 
    margin: 0 auto;

    margin-top: 72px;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;

        strong {
            color: #C4D4E3;
            font-size: 18px;
            font-weight: 700;
        }

        span {
            color: #7B96B2;
            font-size: 14px;
        }
    }

    input {
        width: 100%;

        background: #040F1A;
        border: 1px solid #1C2F41;
        border-radius: 6px;

        padding: 12px 16px;
        margin-bottom: 48px;

        color: #AFC2D4;
    }
`
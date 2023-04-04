import styled from 'styled-components'

export const PostsContainer = styled.div`
    max-width: 864px; 
    margin: 0 auto;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    margin-bottom: 234px;
`

export const Post = styled.a`
    background: #112131;
    border-radius: 10px;
    padding: 32px 32px;

    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        strong {
            font-size: 20px;
            font-weight: 700;
            color: #E7EDF4;
            max-width: 283px;
        }

        span {
            font-size: 14px;
            color: #7B96B2;
        }
    }

    p {
        color: #AFC2D4;
        margin-top: 20px;
        max-width: 352px;
    }

    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
        border: 2px solid #3A536B;
    }
`
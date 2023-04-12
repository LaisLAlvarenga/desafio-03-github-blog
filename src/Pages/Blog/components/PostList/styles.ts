import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostListContainer = styled.div`
    max-width: 864px; 
    margin: 0 auto;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    /* margin-bottom: 234px; */
    margin-bottom: 20px;
`

export const PostCard = styled(Link)`
    text-decoration: none;
    background: #112131;
    border-radius: 10px;
    padding: 32px 32px;

    border: 2px solid transparent;
    cursor: pointer;

    transition: all .5s ;
    &:hover {
        border: 2px solid #3A536B;
        transform: rotateX(0.50rad);
        transform: rotateY(0.50rad);
    }

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
        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
`
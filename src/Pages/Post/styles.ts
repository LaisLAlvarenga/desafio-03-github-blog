import styled from 'styled-components';

export const PostContainer = styled.div`
    max-width: 54rem; 
    margin: 0 auto; 

    p {
        padding: 2.5rem 2rem;
        color: #AFC2D4;
        font-weight: 700;
        max-width: 50rem;
    }
`;

export const PostInfo = styled.div`
    background: #0B1B2B;
    box-shadow: 0rem .125rem 1.75rem rgba(0, 0, 0, 0.2);

    border-radius: 10px;
    padding: 2rem 2rem 1.25rem;

    margin-top: -5.625rem;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.25rem;

        a {
            text-decoration: none;
            color: #3294F8;
            text-transform: uppercase;
            font-size: .75rem;     
            
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }

    strong {
        color: #E7EDF4;
        font-weight: 700;
        font-size: 1.5rem;      
    }
`

export const Info = styled.div`
    max-width: 24.375rem;
    span {
        display: flex;
        gap: 8px;
        align-items: center;

        color: #7B96B2;
        margin-top: 1.25rem;
    }
`
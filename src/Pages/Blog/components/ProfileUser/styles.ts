import styled from 'styled-components'

export const ProfileContainer = styled.div`
    background-color: #0B1B2B;

    max-width: 864px; 
    margin: 0 auto; 
    height: 212px;

    margin-top: -90px; /* calc(296px - (212px / 2)) */
    border-radius: 0.625rem;
    padding: 2rem 2.5rem;

    display: flex;
    align-items: center;
    gap: 2rem;

    img {
        width: 9.25rem;
        border-radius: 8px;
    }
`

export const UserInfo = styled.div`
    flex: 1;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;        

        strong {
            font-size: 1.5rem;
            font-weight: 700;

            color: ${props => props.theme.title};
            margin-bottom: 0.5rem;
        }

        a {
            text-decoration: none;
            color: #3294F8;

            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;

            &:hover {
                border-bottom: 2px solid #3294F8;
            }
        }
    }
`

export const SocialMedia = styled.section`
    display: flex;
    gap: 24px;

    margin-top: 24px;

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`
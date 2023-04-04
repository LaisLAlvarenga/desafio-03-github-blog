import styled from 'styled-components'

export const ProfileContainer = styled.div`
    background-color: #0B1B2B;
    max-width: 864px; 
    margin: 0 auto; 
    height: 212px;

    margin-top: -90px; /* calc(296px - (212px / 2)) */
    border-radius: 10px;
    padding: 0 40px;

    display: flex;
    align-items: center;
    gap: 32px;
`

export const UserInfo = styled.div`
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;        

        strong {
            font-size: 24px;
            font-weight: 700;
            color: ${props => props.theme.title};
            margin-bottom: 8px;
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

export const SocialMedia = styled.div`

    span {
        margin-top: 24px;
        
        display: flex;
        align-items: center;
        gap: 8px;
    }
`
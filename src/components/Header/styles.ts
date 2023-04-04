import styled from 'styled-components'
import bg from '../../assets/Cover.svg'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 280px;
    text-align: center;
    

    background: url(${bg}) no-repeat center;
    background-size: cover;

    img {
        margin-top: 64px;
    }
`
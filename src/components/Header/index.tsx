import {HeaderContainer} from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="" />
            </div>
        </HeaderContainer>
    )
}
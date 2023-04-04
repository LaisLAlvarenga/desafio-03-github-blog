import {Header} from '../../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBuilding, faUserGroup, faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import {HomeContainer} from './styles'
import { ProfileUser } from '../../components/ProfileUser'
import { Search } from '../../components/Search'

export function Home() {
    return (
        <HomeContainer>
            <Header />
            <ProfileUser />
            <Search />
        </HomeContainer>
    )
}
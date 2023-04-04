import {ProfileContainer, UserInfo, SocialMedia} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBuilding, faUserGroup, faCalendarDay, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import Avatar from '../../assets/avatar.svg';

export function ProfileUser() {
    return (
        <ProfileContainer>
            <img src={Avatar} />

            <UserInfo>                
                <div>
                    <strong>Cameron Williamson</strong>
                    <a href='#'>Github</a>
                </div>
                <span>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.
                </span>
                
                <SocialMedia>                    
                    <span>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        cameronwll
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} />
                        Rocketseat
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        32 seguidores
                    </span>
                </SocialMedia>
            </UserInfo>        
        </ProfileContainer>
    )
}
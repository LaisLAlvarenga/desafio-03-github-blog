import { useEffect, useState } from 'react';
import axios from 'axios';

import {ProfileContainer, UserInfo, SocialMedia} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBuilding, faUserGroup, faCalendarDay} from '@fortawesome/free-solid-svg-icons'

export interface ProfileProps {
    name: string;
    bio: string;
    followers: number;
    company?: string;
    login: string;
    avatar_url: string; 
    html_url: string;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function ProfileUser() {
    const [profileData, setProfileData] = useState<ProfileProps>({} as ProfileProps) /* profileData */

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                setProfileData(response.data);
            })
    }, [])

    return ( 
        <ProfileContainer>            
            <img src={profileData.avatar_url} />
            
            <UserInfo>                
                <div>
                    <strong>{profileData.name}</strong>
                    <a href={profileData.html_url} target='_blank'>Github</a>
                </div>
                <span>{profileData.bio}</span>
            
                <SocialMedia>                   
                    <span>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        {profileData.login}
                    </span>

                    {profileData.company ? (
                        <span>
                            <FontAwesomeIcon icon={faBuilding} />
                            {profileData.company}
                        </span>
                    ) : ('')}

                    <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {profileData.followers} seguidores
                    </span>
                </SocialMedia>
            </UserInfo>  
        </ProfileContainer>          
    )
}
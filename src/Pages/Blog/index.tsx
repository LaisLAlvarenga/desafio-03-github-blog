import { useEffect, useState } from 'react'
import axios from 'axios'

import {Header} from '../../components/Header'
import { ProfileUser } from './components/ProfileUser'
import { Search } from './components/Search'
import { PostList } from './components/PostList'

export interface IssueData {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
      login: string;
    };
    total_acount: number;
}

export function Home() {
    /* 
        Estado armazena o result de um search nas issues.
        Rota: api.github.com/search/issues?q=${texto}%20repo:${username}/${repo}
    */
    const [issues, setIssues] = useState<IssueData[]>([]);
    
    useEffect(() => {
        axios.get('https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge').then(response => {
            return(                
                setIssues(response.data.items)
            )
        })
    }, [])

    return (
        <>
            <Header />
            <ProfileUser />
            <Search countPosts={issues.length}/>
            
            {issues.map(issue => {
                return(
                    <PostList  key={issue.number} dataPost={issue} />
                )
            })}
        </>            
    )
}
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Header } from '../../components/Header';

import {PostContainer, Info, PostInfo} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDay, faChevronLeft, faArrowUpRightFromSquare, faComment} from '@fortawesome/free-solid-svg-icons'

interface PostProps {
    body: string;
    title: string;
    created_at: string;
    comments: number;
    html_url: string;
    user: {
        login: string;
    };
}

export function Post() {
    const [post, setPost] = useState<PostProps>({} as PostProps)

    const {id} = useParams();

    async function loadPosts() {
        await axios.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`).then(response => {
            return(                
                setPost(response.data)
            )
        })       
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return(
        <>
            <Header />
            <PostContainer>  
                <PostInfo>
                    <div>
                        <a href="/">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            Voltar
                        </a>
                        <a href={post.html_url} target='_blank'>
                            Ver no Github
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <strong>{post.title}</strong>

                    <Info>                    
                        <span>
                            <FontAwesomeIcon icon={faCalendarDay} />
                            {post?.user?.login}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCalendarDay} />
                            {post.created_at}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faComment} />
                            {post.comments} comentários
                        </span>
                    </Info>
                </PostInfo>
                <p>{post.body}</p>     
            </PostContainer>
        </>
    )
}
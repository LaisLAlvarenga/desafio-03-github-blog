import {PostListContainer, PostCard} from './styles';
import { IssueData } from '../..';

interface PostListProps {
    dataPost: IssueData;
}

export function PostList({dataPost}: PostListProps) {
    return(
        <PostListContainer>
            <PostCard to={`/post/${dataPost.number}`}>
                <div>
                    <strong>{dataPost.title}</strong>
                    <span>{dataPost.created_at}</span>
                </div>
                <p>{dataPost.body}</p>
            </PostCard>            
        </PostListContainer>
    )
}
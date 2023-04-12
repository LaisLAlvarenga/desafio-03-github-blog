import {SearchContainer} from './styles';

interface SearchProps {
    countPosts: number;
}

export function Search({countPosts}: SearchProps) {
    return(
        <SearchContainer>
            <div>
                <strong>Publicações</strong>
                <span>{countPosts} publicações</span>
            </div>
            <input 
                type="text" 
                placeholder='Buscar conteúdo' 
            />
        </SearchContainer>
    )
}
import {Route, Routes} from 'react-router-dom'
import { Post } from './Pages/Post'
import { Home } from './Pages/Blog'

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<Post />} />
        </Routes>
    )
}
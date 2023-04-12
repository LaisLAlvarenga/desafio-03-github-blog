import { GlobalStyles } from './styles/global'
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/defaul'
import {Router} from './Router';
import {BrowserRouter} from 'react-router-dom'

export function App() {
return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter> 
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

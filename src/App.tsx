import { GlobalStyles } from './styles/global'
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/defaul'
import { Home } from './Pages/Home'

export function App() {
return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

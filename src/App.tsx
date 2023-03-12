import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import GlobalStyles from './styles/global'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Home />
    </BrowserRouter>
  )
}
export default App

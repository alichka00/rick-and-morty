import { HashRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Characters } from './pages/Characters'
import GlobalStyles from './styles/global'

import { Episodes } from 'pages/Episodes'

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>
    </HashRouter>
  )
}
export default App

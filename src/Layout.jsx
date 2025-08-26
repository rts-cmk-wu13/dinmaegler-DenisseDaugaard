
import { Outlet } from 'react-router'
import Header from './Components//header-components/Header'

function App() {
 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <small>© 2023 My App</small>
      </footer>
    </>
  )
}

export default App

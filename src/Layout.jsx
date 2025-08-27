
import { Outlet } from 'react-router'
import Header from './Components//header-components/Header'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

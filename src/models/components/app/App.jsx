import './App.scss'
import HeaderComponent from '../../../views/components/HeaderComponent/HeaderComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from "../../../views/pages/ContactPage.jsx"
import MainPage from "../../../views/pages/MainPage.jsx"

function App() {

  return (
    <BrowserRouter>
      <HeaderComponent />

      <Routes>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' element={<MainPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App

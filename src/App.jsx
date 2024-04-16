import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={'<Home />'} />
        <Route path="sobre" element={'<Sobre />'} />
        <Route path="contato" element={'<Contato />'} />
        <Route path="*" element={'<Pagina404 />'} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

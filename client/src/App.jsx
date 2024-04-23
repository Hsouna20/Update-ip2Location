import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Component/Header"
import Update from "./Component/update"
import FooterCom from "./Component/footer"

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Update/>}/>
      </Routes>
      <FooterCom/>
    </BrowserRouter>
  )
}

export default App

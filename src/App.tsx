import './App.css'
import Page1 from "./components/page1/page1.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./components/search-page/searchpage.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Page1/>} />
            <Route path='/search' element={<SearchPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

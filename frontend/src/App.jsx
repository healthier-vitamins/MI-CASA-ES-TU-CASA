import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import Credentials from "./pages/Credentials"
import IndexHome from "./pages/IndexHome"
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import ShowPost from "./pages/ShowPost"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<IndexHome/>}/>
            <Route path="/credentials/:id" element={<Credentials/>}/>
            <Route path="/create-post/" element={<CreatePost/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="/show-post/:id" element={<ShowPost/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import IndexHome from "./pages/IndexHome"
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import ShowPost from "./pages/ShowPost"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import { atom } from "jotai";
import "./App.css"

// jotai userAtom
export const userAtom = atom({});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexHome />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile/:username/:id" element={<Profile />} />
            <Route path="/show-post/:id" element={<ShowPost />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

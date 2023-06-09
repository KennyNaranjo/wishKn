import { HomePage, PostForm, NotFoundPage } from "./pages/"
import { Routes, Route } from "react-router-dom"
import { PostProvider } from "./context/postContext"
import {Toaster} from 'react-hot-toast'
import LoginButton from "./components/LoginButton"
import Profile from "./components/Profile"
import LogoutButton from "./components/LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"

function App() {

  const { isAuthenticated, isLoading } = useAuth0()

  return (
      <div className="bg-neutral-900 min-h-screen flex items-center">
        <div className="px-10 container m-auto ">
          <div>
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
          </div>
        
        <Profile/>
        <PostProvider>
          <Routes>
            <Route path= '/' element={<HomePage/>} />
            <Route path= '/new' element={<PostForm/>} />
            <Route path= '/post/:id' element={<PostForm/>} />
            <Route path= '*' element={<NotFoundPage/>} />
          </Routes>
          <Toaster/>
        </PostProvider>
        </div> 
      </div>
    )
}

export default App
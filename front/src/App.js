import { HomePage, PostForm, NotFoundPage } from "./pages/"
import { Routes, Route } from "react-router-dom"
import { PostProvider } from "./context/postContext"
import {Toaster} from 'react-hot-toast'
import LoginButton from "./components/LoginButton"
import Profile from "./components/Profile"
import LogoutButton from "./components/LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import mu from "./logo/mu.png"

function App() {

  const { isAuthenticated, isLoading } = useAuth0()

  return (
    <>
        <div className="bg-neutral-900 flex flex-row justify-center items-center px-40 relative pt-7">
          <img className='w-96 h-' src={mu} alt="mu" />
          <div className="absolute right-[34rem] flex flex-col items-center justify-around ">
            <Profile/>
            <div className="py-4">
              {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
            </div>
          </div>
        </div>
      <div className="bg-neutral-900 min-h-full flex flex-col items-center">
        <div className="px-10 container m-auto pb-7 ">
        
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
    </>
    )
}

export default App
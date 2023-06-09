import { useAuth0 } from "@auth0/auth0-react"

function LoginButton() {

    const { loginWithRedirect } = useAuth0()
  return (
    
    <button className="bg-green-600 hover:bg-green-500 text-sm px-2 py-1 rounded-sm" onClick={() => loginWithRedirect() } >Login</button>
  )
}

export default LoginButton
import { useState } from 'react'
 

function Login() {
  const [email, setEmail] = useState('')
const [password, setpassword] = useState('')
 
    function handleSubmit(e){
      e.preventDefault()
      console.log(email, password)
    }
 return(
<form onSubmit={handleSubmit}>
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setpassword(e.target.value)}
  />
  <button type="submit">Login</button>
</form>
 )
}
export default Login

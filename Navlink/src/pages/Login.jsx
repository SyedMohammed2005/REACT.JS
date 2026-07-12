import {useNavigate} from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    function handleLogin(){
        alert("Login Successful");
        navigate("/dashboard");
    }
    return(
<>
<h2>
    login page
</h2>
<button onClick={handleLogin}>Login</button>
</>
    )
}
export default Login;
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    alert("Login Successful");

    navigate("/dashboard/profile");
  }

  return (
    <>
      <h1>Login</h1>

      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
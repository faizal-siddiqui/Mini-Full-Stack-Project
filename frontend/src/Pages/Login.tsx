import React from "react";
import "../components/SignUp/SignUp.css";
import { useNavigate } from "react-router-dom";

type Props = {};

interface loginType {
  username: string;
  password: string;
}

const Login = (props: Props) => {
  const [cred, setCred] = React.useState<loginType>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/users/login`, {
        method: "POST",
        body: JSON.stringify(cred),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      alert("Login Successful");
      document.cookie = `token=${data.token}`;
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className="signUpBox">
        <p className="heading">Login</p>
        <form onSubmit={loginAccount}>
          <p>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCred({ ...cred, username: e.target.value })
              }
              className="inputBox"
              type="text"
              placeholder="Enter Username"
            />
          </p>

          <p>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCred({ ...cred, password: e.target.value })
              }
              className="inputBox"
              type="text"
              placeholder="Enter Password"
            />
          </p>

          <p>
            <input className="inputBox submit" type="submit" value="Login" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

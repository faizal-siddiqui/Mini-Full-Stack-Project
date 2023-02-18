import React from "react";
import "../components/SignUp/SignUp.css";
import { useNavigate } from "react-router-dom";

type Props = {};

interface signUpType {
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
  location: string;
  dob: string;
}

const SignUp = (props: Props) => {
  const [admin, setAdmin] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");
  const [cred, setCred] = React.useState<signUpType>({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    location: "",
    dob: "",
  });
  const navigate = useNavigate();

  const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (cred.password === password) {
        const res = await fetch(
          `https://sore-yak-school-uniform.cyclic.app/users/register`,
          {
            method: "POST",
            body: JSON.stringify(cred),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        alert("Your account is created");
        navigate("/login");
      } else {
        alert("Password is mismatched");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className="signUpBox">
        <p className="heading">SignUp</p>
        <form onSubmit={createAccount}>
          <p>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCred({ ...cred, name: e.target.value })
              }
              className="inputBox"
              type="text"
              placeholder="Enter name"
            />
          </p>

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
                setCred({ ...cred, email: e.target.value })
              }
              className="inputBox"
              type="text"
              placeholder="Enter Email"
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
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="inputBox"
              type="text"
              placeholder="ReEnter Password"
            />
          </p>
          <div
            onClick={() => {
              setAdmin(true);
              setCred({ ...cred, role: "admin" });
            }}
            className="inputBox btn"
          >
            Admin
          </div>
          <div
            onClick={() => {
              setAdmin(false);
              setCred({ ...cred, role: "regular", location: "", dob: "" });
            }}
            className="inputBox btn"
          >
            User
          </div>
          {admin ? <Admininput cred={cred} setCred={setCred} /> : ""}

          <p>
            <input className="inputBox submit" type="submit" />
          </p>
        </form>
      </div>
    </div>
  );
};

type AdmininputProps = {
  setCred: (value: signUpType) => void;
  cred: signUpType;
};

export const Admininput = ({ setCred, cred }: AdmininputProps) => {
  return (
    <>
      <p>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCred({ ...cred, location: e.target.value })
          }
          className="inputBox"
          type="text"
          placeholder="Enter Location"
        />
      </p>
      <p>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCred({ ...cred, dob: e.target.value })
          }
          className="inputBox"
          type="date"
        />
      </p>
    </>
  );
};

export default SignUp;

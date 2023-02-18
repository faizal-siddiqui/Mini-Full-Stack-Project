import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/About/About.css";
type Props = {};

interface projectType {
  _id: string;
  name: string;
  owner: string;
  like_count: number;
  role: string;
  packages: string[];
  screenshots: string[];
}

const About = (props: Props) => {
  const [data, setData] = useState<projectType[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    let token = document.cookie.split(";")[0].split("=")[1];
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/projects/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainBox">
      <div className="box">
        {data?.map((el) => (
          <div key={el._id}>
            <h1 className="head">{el.name}</h1>
            <p className="name">Build by {el.owner}</p>
            <p className="details">({el.role})</p>
            <p className="details">{el.like_count}</p>
            {/* <p>{el.}</p> */}
            <h1>Packages Used</h1>
            <div>
              {el.packages?.map((pack) => {
                return <p className="package">{pack}</p>;
              })}
            </div>
            <h1>Screenshots</h1>
            <div>
              {el.screenshots?.map((shots) => {
                return <img src={shots} alt={shots} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

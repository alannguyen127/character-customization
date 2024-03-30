import React, { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import "./App.css";
import ChooseList from "./components/ChooseList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  glasses: 17,
  clothes_1: 5,
  clothes_2: 5,
  clothes_3: 9,
  hats: 28,
};

function App() {
  const [data, setData] = useState({
    body: 0,
    eyes: 0,
    eyebrows: 0,
    hair: 0,
    clothes_1: 0,
    clothes_2: 0,
    clothes_3: 0,
    mouths: 0,
    glasses: 0,
    hats: 0,
  });
  const [select, setSelect] = useState("");
  const choosed = data[select];

  const randomize = () => {
    setData({
      body: Math.floor(Math.random() * total.body),
      eyes: Math.floor(Math.random() * total.eyes),
      eyebrows: Math.floor(Math.random() * total.eyebrows),
      hair: Math.floor(Math.random() * total.hair),
      clothes_1: Math.floor(Math.random() * total.clothes_1),
      clothes_2: Math.floor(Math.random() * total.clothes_2),
      clothes_3: Math.floor(Math.random() * total.clothes_3),
      mouths: Math.floor(Math.random() * total.mouths),
      glasses: Math.floor(Math.random() * total.glasses),
      hats: Math.floor(Math.random() * total.hats),
    });
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="container">
      <div className="title">CUSTOMIZE</div>
      <div className="subtitle">YOUR APPEARANCE</div>
      <div className="divider"></div>
      <div className="avatar-group">
        <div className="choose-list">
          <ChooseList
            total={total[select]}
            path={select}
            set={setData}
            item={select}
            select={setSelect}
            choosed={choosed}
          />
        </div>
        <div className="avatar-wrapper">
          <Avatar
            body={data.body}
            eye={data.eyes}
            hair={data.hair}
            cloth1={data.clothes_1}
            cloth2={data.clothes_2}
            cloth3={data.clothes_3}
            mouth={data.mouths}
            eyebrow={data.eyebrows}
            glass={data.glasses}
            hat={data.hats}
          />
          <div>
            <button className="button" onClick={() => randomize()}>
              RANDOMIZE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

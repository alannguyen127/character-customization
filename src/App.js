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
  console.log(select);
  console.log(choosed);
  // const [body, setBody] = useState(0);
  // const [eyes, setEyes] = useState(0);
  // const [eyebrows, setEyebrows] = useState(0);
  // const [hair, setHair] = useState(0);
  // const [cloth1, setCloth1] = useState(0);
  // const [cloth2, setCloth2] = useState(0);
  // const [cloth3, setCloth3] = useState(0);
  // const [mouth, setMouth] = useState(0);
  // const [glasses, setGlasses] = useState(0);
  // const [hat, setHat] = useState(0);

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
    // setBody(Math.floor(Math.random() * total.body));
    // setEyes(Math.floor(Math.random() * total.eyes));
    // setEyebrows(Math.floor(Math.random() * total.eyebrows));
    // setHair(Math.floor(Math.random() * total.hair));
    // setCloth1(Math.floor(Math.random() * total.cloth1));
    // setCloth2(Math.floor(Math.random() * total.cloth2));
    // setCloth3(Math.floor(Math.random() * total.cloth3));
    // setMouth(Math.floor(Math.random() * total.mouth));
    // setGlasses(Math.floor(Math.random() * total.glasses));
    // setHat(Math.floor(Math.random() * total.hat));
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
        {/* <div>
          <div className="list-section">
            <h2>Body</h2>
            <PartList
              total={total.body}
              path="body"
              set={setBody}
              selected={body}
            />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <PartList
              total={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
            />
          </div>
          <div className="list-section">
            <h2>Eye Brows</h2>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrows}
              selected={eyebrows}
            />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <PartList
              total={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className="list-section">
            <h2>Mouth </h2>
            <PartList
              total={total.mouth}
              path="mouths"
              set={setMouth}
              selected={mouth}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (Layer 1)</h2>
            <PartList
              total={total.cloth1}
              path="clothes/layer_1"
              set={setCloth1}
              selected={cloth1}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (Layer 2)</h2>
            <PartList
              total={total.cloth2}
              path="clothes/layer_2"
              set={setCloth2}
              selected={cloth2}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (Layer 3)</h2>
            <PartList
              total={total.cloth3}
              path="clothes/layer_3"
              set={setCloth3}
              selected={cloth3}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="list-section">
            <h2>Hats</h2>
            <PartList
              total={total.hat}
              path="accessories/hats"
              set={setHat}
              selected={hat}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;

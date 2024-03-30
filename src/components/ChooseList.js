import React, { useState } from "react";
import PartList from "./PartList";

const arrItems = [
  "Body",
  "Hair",
  "Eyes",
  "Eyebrows",
  "Mouths",
  "Glasses",
  "Hats",
  "Clothes_1",
  "Clothes_2",
  "Clothes_3",
];

function ChooseList({ total, path, set, item, select, choosed }) {
  const [showDiv, setShowDiv] = useState(false);

  const renderPartList = (item) => {
    setShowDiv(true);
    select(item);
  };

  return (
    <div>
      {arrItems.map((item) => (
        <div>
          <button
            key={Math.random()}
            className="choose-btn"
            onClick={() => renderPartList(item.toLowerCase())}
          >
            {item}
          </button>
        </div>
      ))}
      {showDiv && (
        <div className="part-list">
          <h2>{item}</h2>
          <PartList total={total} path={path} set={set} choosed={choosed} />
        </div>
      )}
    </div>
  );
}

export default ChooseList;

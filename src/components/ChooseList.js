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
  const [showDiv, setShowDiv] = useState(true);

  const renderPartList = (item) => {
    setShowDiv(true);
    select(item);
  };
  select(item.toLowerCase());
  return (
    <div>
      <div className="choose-list">
        {arrItems.map((item) => (
          <div
            key={Math.random()}
            className="choose-option"
            onClick={() => renderPartList(item.toLowerCase())}
          >
            {item}
          </div>
        ))}
      </div>
      {showDiv && (
        <div className="list-container">
          <h2>{item}</h2>
          <PartList total={total} path={path} set={set} choosed={choosed} />
        </div>
      )}
    </div>
  );
}

export default ChooseList;

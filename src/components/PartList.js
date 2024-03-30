import React from "react";

function PartList({ total, path, set, choosed }) {
  let parts = [];
  for (let index = 0; index < total; index++) {
    parts.push(
      <div
        key={path + index}
        onClick={() => {
          set((prev) => ({ ...prev, [path]: index }));
        }}
        className={
          choosed === index ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`character/${path}/${index + 1}.png`}
          alt=""
          height={60}
          className="img-choose"
          style={{ top: "50%" }}
        />
      </div>
    );
  }
  return <div className="list">{parts}</div>;
}

export default PartList;

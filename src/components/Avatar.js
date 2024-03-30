import React from "react";
import Part from "./Part";

const Avatar = ({
  body,
  eye,
  hair,
  cloth1,
  cloth2,
  cloth3,
  mouth,
  eyebrow,
  glass,
  hat,
}) => {
  return (
    <div className="avatar">
      <Part path="body" index={body} zIndex={0} />
      <Part path="eyes" index={eye} zIndex={1} />
      <Part path="hair" index={hair} zIndex={6} />
      <Part path="clothes_1" index={cloth1} zIndex={2} />
      <Part path="clothes_2" index={cloth2} zIndex={3} />
      <Part path="clothes_3" index={cloth3} zIndex={4} />
      <Part path="mouths" index={mouth} zIndex={4} />
      <Part path="noses" index={0} zIndex={4} />
      <Part path="eyebrows" index={eyebrow} zIndex={4} />
      <Part path="glasses" index={glass} zIndex={5} />
      <Part path="hats" index={hat} zIndex={6} />
    </div>
  );
};

export default Avatar;

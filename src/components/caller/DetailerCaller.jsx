import React from "react";
import Detailer from "../Detailer";

function DetailerCaller(props) {
  return (
    <Detailer
      heading={"ALGO: Intermediate"}
      readings={"2"}
      tests={"2"}
      videos={"8"}
      cardColor={"#9747FF"}
      cardNo={"6"}
      time={"7.5"}
    />
  );
}

export default DetailerCaller;

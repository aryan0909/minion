import React, { useState } from "react";
import JoEditor from "./sub-components/JoEditor";

function TextEditor() {
  const [value, setValue] = useState("");
  return (
    <>
      <JoEditor setValue={setValue} />
      <div>{value}</div>
    </>
  );
}
export default TextEditor;
